import React from 'react'
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../apiCalls/users';


const Login = () => {
	const navigate = useNavigate()
	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const data = {
			email: formData.get('email'),
			password: formData.get('password')
		}
		try {
			const response = await loginUser(data)
			if (response.success) {
				message.success(response.message)
				localStorage.setItem('token', response.data)
				navigate('/dashboard')
			} else {
				message.error(response.error)
			}
		}
		catch (error) {
			message.error(error.message)
		}
	}


	return (
		<div className='container'>
			<form onSubmit={handleSubmit} >
				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="email" style={{ color: '#0c518f' }}>Enter your email</label>
					<input name='email' className='form-control' style={{ width: '40%' }} id='email' type="email" required placeholder="Email id" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="passwors" style={{ color: '#0c518f' }}>Enter your password</label>
					<input name='password' required className='form-control' style={{ width: '40%' }} id="userName" type="password" placeholder="password" />
				</div>

				<button type='submit' className='btn btn-success' style={{ marginTop: "10px" }}>Login</button>
				<p className='mt-3'>
					Forget your username or passowrd? <Link to="/login" className='btn btn-primary'>Reset Here</Link>
				</p>
			</form>
		</div>
	)
}

export default Login
