import React from "react";
import "../styles/BadgeNew.css";
import header from "../../images/logo conf.svg";
import Badge from "../Badge";
import BadgeForm from "../BadgeForm";
import PageLoading from "./PageLoading";

import api from "../../api";
class BadgesNew extends React.Component {
	state = {
		loading:false,
		error:null,
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
	handleSubmit= async e =>{//lamo a api
		e.preventDefault();
		this.setState({ loading: true, error: null });//estado antes de hacer el POST
try {
	await api.badges.create(this.state.form);
this.setState({ loading: false });
this.props.history.push('/badges');//redirecciono a lapagina badges una vez se envie el form
} catch (error){
this.setState({loading:false,error:error})//error es:error porque se guarda eso y se ignora lo demas
}
	}
	render() {
		if(this.state.loading){
return <PageLoading />
		}
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
								firstName={this.state.form.firstName || "FIRST_NAME"} //valor por omision por si no existe
								lastName={this.state.form.lastName || "LAST_NAME"}
								email={this.state.form.email || "EMAIL"}
								jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
								twitter={this.state.form.twitter || "TWITTER"}
								avatarUrl="https://s.gravatar.com/avatar/daa7525f3216837201eab4dcc82c06df?s=80"
							/>
						</div>
						{/* badge form */}
						<div className="col-6">
							{/* EN EL EVENTO ONCHANGE LLAMO A HANDLE QUE TRAE EL ONCHANGE DEL BADGEFORM */}
							<h1>Nuevo usuario </h1>
							<BadgeForm
								onChange={this.handleChange} //paso como prop el handleChange de badgeNew
								onSubmit={this.handleSubmit} //llamo metodo que defino en bagdeform
								formValues={this.state.form} //paso los valores del NEW al FORM
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default BadgesNew;
