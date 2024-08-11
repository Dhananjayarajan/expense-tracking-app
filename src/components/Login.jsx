import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='container'>
			<form>
				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="username" style={{ color: '#0c518f' }}>Enter your User Name</label>
					<input className='form-control' style={{ width: '40%' }} id='username' type="text" required placeholder="User Name" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="passwors" style={{ color: '#0c518f' }}>Enter your password</label>
					<input required className='form-control' style={{ width: '40%' }} id="userName" type="password" placeholder="password" />
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
