import React from "react";

class BadgeForm extends React.Component {
	state = {
		// user_name:'diego' puedo poner un default que cambia cuando modifique el input
	};
	handleChange = (e) => {
		// console.log({
		// 	value: e.target.value, //contenido ingresado
		// 	name: e.target.name, //nombre del campo ingresado
		// });
		// borro el metodo porque ya no necesito tener esta info aqui
		// this.setState({
		// 	[e.target.name]: e.target.value,
		//user_name:"diego",
		//user_lastName:"dorado"
		// field: e.target.name, //nombre del input ingresado
		// });
	};
	handleClick = (e) => {
		console.log("boton presionado");
	};
	// handleSubmit = (e) => {
	// 	e.preventDefault(); //evitar que la pagina se recargue
	// 	console.log(this.state);
	// };
	render() {
		return (
			//en hadnlesubmit llamo al prop onSubmit que traigo de badgenew y a su vez llama a handle submit
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>Nombre</label>
						<input
							onChange={this.props.onChange} //paso la info que ingresen al objeto de onCHANGE
							className="form-control"
							type="text"
							name="firstName"
							value={this.props.formValues.firstName} // guarde el state {form} de news en formValues y hago bin aqui como props.name
							// value={this.state.firstName} cuando el form guarda el estado    // asignar el value al estado asi ahorro storage
						/>
						{/* apellido */}
						<label>Apellido</label>
						<input
							onChange={this.props.onChange} //INPUTS USAN EL PROP ONCHANGE PARA GUARDAR INFO
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName} // asigno el valor del input al att de los props
						/>
						<label>Email</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
						<label>Puesto</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
						<label>Twitter</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>
					<button
						// type="button" default submit
						onClick={this.handleClick}
						className="btn btn-primary"
					>
						Registrar||Editar
					</button>
					{/* condicional que evalua si this.props.error es true */}
					{this.props.error && (
						<p className="text-danger"> {this.props.error.message}</p>
					)}
				</form>
			</div>
		);
	}
}

export default BadgeForm;
