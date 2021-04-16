import React from "react";
import "./styles/Badges.css";
import BadgeList from "../BadgeList";
import confLogo from "../../images/badge-header.svg";
import { Link } from "react-router-dom";
import api from'../../api';
import PageLoading from './PageLoading';
import PageError from "../Pages/PageError";

class Badges extends React.Component {
	state    =    {
		//defino estado inicial para que no genere error
								loading:    true,
								error:    null,
								data:    undefined,
	};
	componentDidMount(){
		this.fetchData()
	}
	fetchData= async() => {
		this.setState({loading:true,error:null});//hago esto para futuras ocasiones cuando llame a fetchDATA
		try {
			const data = await api.badges.list();
			this.setState({loading:false,data:data})//guardo los datos si los encuentro
		}
		catch (error) {
						this.setState({ loading: false,error:error });//guardamos el error en el state
		}
	}
	render() {
		if(this.state.loading ===true){
			return <PageLoading />//aparece y se queda porque no hay nada que lo cambie
		}
		if (this.state.error) {
			return <PageError error={this.state.error}/>; //paso el state.error como props al PageError
		}
		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="conf-logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							new badge
						</Link>
					</div>
					{/* lista de elementos (faker data) */}
					<div className="Badge__list">
						<div className="Badge__container">
							<BadgeList badges={this.state.data} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
