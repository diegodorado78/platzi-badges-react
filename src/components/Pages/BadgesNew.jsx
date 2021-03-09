import React from "react";
import "../styles/BadgeNew.css";
import header from "../../images/badge-header.svg";
import Navbar from "../Nabvar";
import Badge from "../Badge";
import BadgeForm from "../BadgeForm";

class BadgesNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img src={header} alt="" className="img-fluid" alt="logo" />
				</div>
				{/* main badge */}
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName="Diego"
								lastName="Dorado"
								jobTitle="Frontend Dev"
								twitter="diego_dorado"
								avatarUrl="https://s.gravatar.com/avatar/daa7525f3216837201eab4dcc82c06df?s=80"
							/>
						</div>
						{/* badge form */}
						<div className="col-6">
							<BadgeForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BadgesNew;
