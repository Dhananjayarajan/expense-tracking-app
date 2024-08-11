import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo6.png'

const Header = () => {
	return (
		<div className='container-fluid p-0 m-0'>
			<nav className="navbar navbar-expand-lg  p-0" >
				<div className="container-fluid p-0 d-flex">
					<a href="" className="navbar-brand fs-1 text text-light"><img src={logo} alt="Logo" style={{ width: '200px', height: '150px' }} /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end " id="navbarNav">
						<ul className="navbar-nav mb-2 mb-lg-0" style={{ paddingRight: '15px' }}>
							<li className="nav-item">
								<Link to='/' className="nav-link active fs-3 fw-bold text" style={{ color: '#0c518f' }} aria-current="page" href="#">Home</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link active fs-3 fw-bold text" style={{ color: '#0c518f' }} aria-current="page" href="#">Documentation</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active fs-3 fw-bold text" style={{ color: '#0c518f' }} aria-current="page" href="#">Dashboard</a>
							</li>
							<li className="nav-item">
								<Link to='/Signup' className="nav-link fw-bold fs-3 text" href="signup" style={{ color: '#0c518f' }} >Signup</Link>
							</li>
							<li className="nav-item">
								<Link to='/Login' className="nav-link fw-bold fs-3 text" href="#" style={{ color: '#0c518f' }} >Login</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
