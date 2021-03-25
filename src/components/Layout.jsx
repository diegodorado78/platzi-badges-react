import React from "react";
import Navbar from "./Nabvar";
function Layout(props) {
	// const children =children.props
	return (
		//retorno el navbar y los children que recibe como props layout
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	); //regresar lo que el layout tienen internamente (switch)
}
export default Layout;
