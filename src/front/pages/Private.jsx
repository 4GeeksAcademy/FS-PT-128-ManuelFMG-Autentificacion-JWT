import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { privateCheck } from "../services/backendServices"

export const Private = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const checkToken = async () => {
        const response = await privateCheck()
        if (response) {
            setUser(response)
            setLoading(false)
        }
        else {
            localStorage.removeItem("token")
            navigate("/")
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setTimeout(() => {
                navigate("/")
            }, 1000)

        } else {
            checkToken()

        }

    }, [])

    return (
        <>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (

                <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
                    <div className="card-body text-center">
                        <h5 className="card-title">Perfil</h5>

                        <p className="card-text">
                            {user?.email}
                        </p>

                        <button
                            className="btn btn-danger mt-3"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            )}




        </>

    )


}