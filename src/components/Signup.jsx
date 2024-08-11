import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<div className='container'>
			<form>
				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="email" style={{ color: '#0c518f' }}>Enter your email id</label>
					<input className='form-control' style={{ width: '40%' }} id='email' type="email" required placeholder="Email ID" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="userName" style={{ color: '#0c518f' }}>Enter your User Name</label>
					<input required className='form-control' style={{ width: '40%' }} id="userName" type="text" placeholder="User Name" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="password" style={{ color: '#0c518f' }}>Enter your Password</label>
					<input required className='form-control' style={{ width: '40%' }} id='password' type="password" placeholder="Password" />
				</div>

				<div className="mb-3">
					<label className='form-label fw-bold' htmlFor="retype" style={{ color: '#0c518f' }}>Retype password</label>
					<input required className='form-control' style={{ width: '40%' }} id='retype' type="password" placeholder="Retype Password" />
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
