import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";
//HOOK->FUNCTIONAL COMPONENT
//MAIN COMPONENT
function BadgeList(props) {
	// const badgesList = [...props.badges].reverse();
	const badgesList = props.badges.reverse(); //invertir el orden de la lista de badges
	const { query, setQuery, filteredBadges } = useSearchBadges(badgesList);
	if (filteredBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label>Filtrar Badges</label>
					<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value); //al ingresar algo al input invoco la funcion setQuery para actualizar el estado
						}}
					/>
				</div>
				<h3>No encontramos ningun badge</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Crear nuevo Bagde
				</Link>
			</div>
		);
	}
	return (
		<div className="BadgesList">
			<div className="form-group">
				<label>Filtrar Badges</label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value); //al ingresar algo al input invoco la funcion setQuery para actualizar el estado
					}}
				/>
			</div>
			<ul className="list-unstyled">
				{filteredBadges.map((badge) => {
					//badges es la var que me guarda la data del state
					return (
						<li className=" container row border my-1 info " key={badge.id}>
							<div className="text-decoration-none">
								<Link lassName="" to={`/badges/${badge.id}`}>
									<p>
										<strong> Nombre:</strong> {badge.firstName} {badge.lastName}
									</p>
									<p>
										<strong>Email:</strong> {badge.email}
									</p>
									<p>
										<strong>Twitter: </strong> @{badge.twitter}
									</p>
								</Link>
							</div>
							<div className=" Badge_section-img m-4">
								<Gravatar
									className="Badge__avatar"
									email={badge.email}
									alt="Avatar"
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
//custom hook
function useSearchBadges(badgesList) {
	const [query, setQuery] = React.useState("");
	const [filteredBadges, setFilteredBadges] = React.useState(badgesList); //valor inicial la lista completa de badges
	React.useMemo(() => {
		const result = badgesList.filter((badge) => {
			//hago el nombre y apellido un solo string con `` para luego llamar a los metodos sobre todo eso
			return `${badge.firstName}${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase());
		}); //regresa los badges que tienen la palabra del query

		setFilteredBadges(result);
	}, [badgesList, query]);
	return { setQuery, filteredBadges }; //segundo argumento es una lista que guarda los props que hay que revisar si cambian
}

export default BadgeList;
// class BadgesListItem extends React.Component {
// 	render() {
// 		return (
// 			<div className="BadgesListItem">
// 				<Gravatar
// 					className="BadgesListItem__avatar"
// 					email={this.props.badge.email}
// 				/>

// 				<div>
// 					<strong>
// 						{this.props.badge.firstName} {this.props.badge.lastName}
// 					</strong>
// 					<br />@{this.props.badge.twitter}
// 					<br />
// 					{this.props.badge.jobTitle}
// 				</div>
// 			</div>
// 		);
// 	}
// }
// class BadgesList extends React.Component {
//   render() {
//     if (this.props.badges.length === 0) {
//       return (
//         <div>
//           <h3>No badges were found</h3>
//           <Link className="btn btn-primary" to="/badges/new">
//             Create new badge
//           </Link>
//         </div>
//       );
//     }
//     return (
//       <div className="BadgesList">
//         <ul className="list-unstyled">
//           {this.props.badges.map(badge => {
//             return (
//               <li key={badge.id}>
//                 <BadgesListItem badge={badge} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }