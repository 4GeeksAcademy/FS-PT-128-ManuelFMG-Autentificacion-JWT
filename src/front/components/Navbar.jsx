import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Navbar = () => {

	const navigate = useNavigate();

	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	return (
		<>
			<nav className="navbar navbar-light bg-light">
				<div className="container">

					<button
						className="btn btn-primary"
						onClick={() => navigate("/")}
					>
						Home
					</button>

					<div className="d-flex gap-2">
						<button
							className="btn btn-primary"
							onClick={() => setShowLogin(true)}
						>
							Iniciar Sesión
						</button>

						<button
							className="btn btn-primary"
							onClick={() => setShowRegister(true)}
						>
							Registrarse
						</button>
					</div>
				</div>
			</nav>

			{showLogin && (
				<Login onClose={() => setShowLogin(false)} />
			)}

			{showRegister && (
				<Register onClose={() => setShowRegister(false)} />
			)}
		</>
	);
};