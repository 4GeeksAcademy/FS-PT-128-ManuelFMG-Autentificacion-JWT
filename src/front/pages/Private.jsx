import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { privateCheck } from "../services/backendServices"

export const Private = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const checkToken = async () => {
        const response = await privateCheck()
        if (response) {
            setUser(response)
            setLoading(false)
        }
        else{
            localStorage.removeItem("token")
            navigate("/")
        }
    } 

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setTimeout (() => {
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

                <div class="card" style="width: 18rem;">
                    <img src="https://images.pexels.com/photos/33802176/pexels-photo-33802176.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Zona Privada</p>
                        </div>
                </div>
            )}




        </>

    )


}