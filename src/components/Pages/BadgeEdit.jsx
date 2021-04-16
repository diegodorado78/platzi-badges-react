import React from "react";
import "../styles/BadgeEdit.css";
import header from "../../images/logo conf.svg";
import Badge from "../Badge";
import BadgeForm from "../BadgeForm";
import PageLoading from "./PageLoading";

import api from "../../api";
class BadgeEdit extends React.Component {
	state = {
		loading: true,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	}; // inicio el state vacio con un objeto form
	//metodo que actualiza el estado llenando el objeto con la info
	componentDidMount() {
		this.fetchData(); //cuando el componente se monte empiezo a buscar los datos
	}
	fetchData = async (e) => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(this.props.match.params.badgeId); //obtener el id del badge
			this.setState({ loading: false, form: data }); //paso la data que traje al elemento form para rellenar el form con la info previa
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form, // recuperar los valores ingresados
				[e.target.name]: e.target.value,
			},
		});
	};
	handleSubmit = async (e) => {
		//lamo a api
		e.preventDefault();
		this.setState({ loading: true, error: null }); //estado antes de hacer el POST
		try {
			await api.badges.update(this.props.match.params.badgeId, this.state.form); //update recibe el id y la info del form
			this.setState({ loading: false });
			this.props.history.push("/badges"); //redirecciono a lapagina badges una vez se envie el form
		} catch (error) {
			this.setState({ loading: false, error: error }); //error es:error porque se guarda eso y se ignora lo demas
		}
	};
	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		return (
			<React.Fragment>
				<div className="BadgeEdit__hero">
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
							<h1>Editar usuario </h1>
							<BadgeForm
								onChange={this.handleChange} //paso como prop el handleChange de BadgeEdit
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
export default BadgeEdit;
