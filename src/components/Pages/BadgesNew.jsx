import React from "react";
import "../styles/BadgeNew.css";
import header from "../../images/badge-header.svg";
import Badge from "../Badge";
import BadgeForm from "../BadgeForm";

class BadgesNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	}; // inicio el state vacio con un objeto form
	//metodo que actualiza el estado llenando el objeto con la info
	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form, // recuperar los valores ingresados
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="" className="img-fluid" />
				</div>
				{/* main badge */}
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								email={this.state.form.email}
								jobTitle={this.state.form.jobTitle}
								twitter={this.state.form.twitter}
								avatarUrl="https://s.gravatar.com/avatar/daa7525f3216837201eab4dcc82c06df?s=80"
							/>
						</div>
						{/* badge form */}
						<div className="col-6">
							{/* EN EL EVENTO ONCHANGE LLAMO A HANDLE QUE TRAE EL ONCHANGE DEL BADGEFORM */}
							<BadgeForm
								onChange={this.handleChange}    //paso como prop el handleChange de badgeNew
								formValues={this.state.form} //paso los valores del NEW al FORM
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default BadgesNew;
