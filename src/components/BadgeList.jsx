import React from "react";
import "./styles/Badge.css";

class BadgeList extends React.Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.badges.map((badge) => {
					//badges es la var que me guarda la data del state
					return (
						<li className=" container row border my-1 info " key={badge.id}>
							<div className="Badge__section-info">
								<p>
									<strong> Nombre:</strong> {badge.firstName} {badge.lastName}
								</p>
								<p>
									<strong>Email:</strong> {badge.email}
								</p>
								<p>
									<strong>Twitter: </strong> @{badge.twitter}
								</p>
							</div>
							<div className=" Badge_section-img m-4">
								<img
									className="Badge__avatar"
									src={badge.avatarUrl}
									alt="avatar"
								/>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}
export default BadgeList;
