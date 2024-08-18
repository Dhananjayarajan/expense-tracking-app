import React from 'react';
import { Link } from 'react-router-dom'
import bgpic from '../assets/bg1.webp';
import '../CSS/hero.css'

const Hero = () => {
	return (
		<div className="hero-container">
			<img src={bgpic} alt="Background" className="background-image" />
			<div className="overlay-content text-center">
				<h1 className="display-2 fw-bold" style={{ color: '#0c518f' }}>Track Your Daily Expenses</h1>
				<Link to='/register'><button className="btn btn-primary m-2">Get Started</button></Link>
				<button className="btn btn-success m-2">Read Documentation</button>
			</div>
		</div>
	);
};

export default Hero;
