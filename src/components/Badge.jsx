import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
	render() {
		return (
			<div>
				<div>
					<img src={confLogo} alt="logo conf" />
				</div>
				<div>
					<img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
					<h1>
						Diego <br /> Dorado
					</h1>
				</div>
				<div>
					<p> Front End Engineer</p>
					<p>@diego_dorado</p>
				</div>
			</div>
		);
	}
}

export default Badge;
