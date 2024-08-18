import React from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { registerUser } from '../apiCalls/users';

const Signup = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = {
			email: formData.get('email'),
			username: formData.get('username'),
			password: formData.get('password'),
		};

		try {
			const response = await registerUser(data); // Pass data, not event
			if (response.success) {
				message.success(response.message);
			} else {
				message.error(response.message);
			}
		} catch (error) {
			message.error(error.message || 'An error occurred');
		}
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="email" style={{ color: '#0c518f' }}>Enter your email id</label>
					<input name='email' className='form-control' style={{ width: '40%' }} id='email' type="email" required placeholder="Email ID" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="userName" style={{ color: '#0c518f' }}>Enter your User Name</label>
					<input name='username' required className='form-control' style={{ width: '40%' }} id="userName" type="text" placeholder="User Name" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="password" style={{ color: '#0c518f' }}>Enter your Password</label>
					<input name='password' required className='form-control' style={{ width: '40%' }} id='password' type="password" placeholder="Password" />
				</div>

				<button type='submit' className='btn btn-success' style={{ marginTop: "10px" }}>Submit</button>

				<p className='mt-3'>
					Already have an account? <Link to="/login" className='btn btn-primary'>Login</Link>
				</p>
			</form>
		</div>
	);
}

export default Signup;
