import { useState } from "react";
import { login } from "../services/backendServices";
import { useNavigate } from "react-router-dom";

export const Login = ({ onClose }) => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(formData, navigate);
		onClose();
	};

	return (
		<div className="modal d-block" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">

					
					<div className="modal-header">
						<h5 className="modal-title">Login</h5>
						<button className="btn-close" onClick={onClose}></button>
					</div>

					
					<div className="modal-body">
						<form onSubmit={handleSubmit}>

							<input
								type="email"
								name="email"
								placeholder="Email"
								className="form-control mb-3"
								onChange={handleChange}
								required
							/>

							<input
								type="password"
								name="password"
								placeholder="Password"
								className="form-control mb-3"
								onChange={handleChange}
								required
							/>

							<button className="btn btn-success w-100">
								Iniciar Sesión
							</button>

						</form>
					</div>

				</div>
			</div>
		</div>
	);
};