import React from "react";
import { Link } from "react-router-dom";
import "../Pages/styles/BadgeDetailsContainer.css";
import DeleteBadgeModal from "../DeleteBadgeModal";
import Badge from "../Badge";
import confLogo from "../../images/logo conf.svg";
function BadgeDetails(props) {
	const badge = props.badge;
	return (
		<div>
			<div className="BadgeDetails__hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={confLogo} alt="logo conf" />
						</div>
						<div className="col-6 BadgeDetails__hero-attendant-name ">
							<h1>
								{badge.firstName} {badge.lastName}
							</h1>
						</div>
					</div>
				</div>
			</div>
			{/* en el siguiente div, traigo a badge y paso los props que recibe */}
			<div className="container">
				<div className="row">
					<div className="col">
						<Badge
							firstName={badge.firstName}
							lastName={badge.lasttName}
							email={badge.email}
							jobTitle={badge.jobTitle}
							twitter={badge.twitter}
						/>
					</div>
					<div className="col">
						<h2>Actions</h2>
						<div>
							<div>
								<Link
									className="btn btn-primary m-2 w-25"
									to={`/badges/${badge.id}/edit`}
								>
									Editar
								</Link>
							</div>
							<div>
								<button
									onClick={props.onOpenModal}
									// onClick={this.openModal}
									className="btn btn-danger m-2 w-25"
								>
									Eliminar
								</button>
								{/* se pasa el modal al container que maneja estado */}
								<DeleteBadgeModal
									isOpen={props.modalIsOpen}
									onClose={props.onCloseModal}
									onDeleteBadge={props.onDeleteBadge}
								>
									lorem ipsum
								</DeleteBadgeModal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default BadgeDetails;
