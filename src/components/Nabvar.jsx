import React from "react";
import logo from "../images/logo.svg";
import "../components/styles/navbar.css";
import {Link} from "react-router-dom"
class Nabvar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Nabvar__brand " to="/">
						<img className="Navbar__brand-logo" src={logo} alt="" />
						<span className="font-weight-light"> PLatzi</span>
						<span className="font-weight-bold"> Conf</span>
					</ Link>
				</div>
			</div>
		);
	}
}

export default Nabvar;
