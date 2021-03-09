import React from "react";
import logo from "../images/logo.svg";
import "../components/styles/navbar.css";
class Nabvar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<a className="Nabvar__brand " href="/">
						<img className="Navbar__brand-logo" src={logo} alt="" />
						<span className="font-weight-light"> PLatzi</span>
						<span className="font-weight-bold"> Conf</span>
					</a>
				</div>
			</div>
		);
	}
}

export default Nabvar;
