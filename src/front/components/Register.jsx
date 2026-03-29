import { useState } from "react";
import { register } from "../services/backendServices";

export const Register = ({ onClose }) => {

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

		const response = await register(formData);

		if (response?.ok) {
			alert("Usuario registrado correctamente");
			onClose();
		}
	};

	return (
		<div className="modal d-block" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">

					
					<div className="modal-header">
						<h5 className="modal-title">Registro</h5>
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

							<button className="btn btn-primary w-100">
								Registrarse
							</button>

						</form>
					</div>

				</div>
			</div>
		</div>
	);
};