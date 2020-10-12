import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<section id="intro" className="backstretch">
				<div className="header">
					<h1>Karsten Taylor</h1>

					<h3>Full-Stack Engineer</h3>
				</div>
				<nav>
					<div className="List">
						<ul>
							<li>
								<Link to="/">About</Link>
							</li>
							<li>
								<Link to="/work">Work</Link>
							</li>

							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</section>
		);
	}
}
