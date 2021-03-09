import React from "react";

class BadgeForm extends React.Component {
	handleChange = (e) => {
		console.log({ value: e.target.value, name: e.target.name });
	};
	render() {
		return (
			<div>
				<h1>Nuevo usuario </h1>
				<form>
					<div className="form-group">
						<label>Nombre</label>
						<input
							onChange={this.handleChange}
							className="form-control"
							type="text"
							name="user_name"
						/>
					</div>
					<button className="btn btn-primary"> registrar</button>
				</form>
				<h2>hello world</h2>
			</div>
		);
	}
}

export default BadgeForm;
