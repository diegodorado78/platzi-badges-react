import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="logo conf" />
				</div>
				<div className="Badge__section-name">
					<img
						className="Badge__avatar"
						src={this.props.avatarUrl}
						alt="avatar"
					/>
					<h1>
						{this.props.firstName}
						<br /> {this.props.lastName}
					</h1>
				</div>
				<div className="Badge__section-info2">
					<h3> {this.props.jobTitle} </h3>
					<p>@{this.props.twitter}</p>
				</div>
				<div className="Badge__footer">#platziconf</div>
			</div>
		);
	}
}

export default Badge;
