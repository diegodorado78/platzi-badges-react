import React from "react";
import BadgeDetails from "./BadgeDetails";
import PageLoading from "./PageLoading";
import PageError from "./PageError";
import api from "../../api";

class BadgeDetailsContainer extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		modalIsOpen: false,
	};

	componentDidMount() {
		this.fetchData();
	}
	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId //traigo el id desde el objeto params
			);
			//si al hacer el try la respuesta es positiva
			this.setState({ loading: false, data: data }); //guardo la info  ue fetch en el state
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	handleOpenModal = (e) => {
		this.setState({ modalIsOpen: true });
	};
	handleCloseModal = (e) => {
		this.setState({ modalIsOpen: false });
	};
	handleDeleteBadge = async (e) => {
		this.setState({ loading: true, error: null });
		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.setState({ loading: false });
			this.props.history.push("/badges");
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}
		// const badge = this.state.data; //creo una constante donde guardo el objeto state

		return (
			<BadgeDetails
				onCloseModal={this.handleCloseModal}
				onOpenModal={this.handleOpenModal}
				modalIsOpen={this.state.modalIsOpen}
				onDeleteBadge={this.handleDeleteBadge}
				badge={this.state.data}
			/>
		); //
	}
}
export default BadgeDetailsContainer;
