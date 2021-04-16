import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import BadgesNew from "../components/Pages/BadgesNew";
import BadgeEdit from "../components/Pages/BadgeEdit";
import BadgeDetailsContainer from "./Pages/BadgeDetailsContainer";

import Badges from "../components/Pages/Badges";
import NotFound from "../components/Pages/NotFound";

function App() {
	return (
		//solo puede tener un hijo (switch)
		<BrowserRouter>
			{/*  switch toma la direccion del navegador y renderiza solo una vista */}
			<Layout>
				{/* debo usar unos props para que el  <switch /> aparezca dentro del layout */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgesNew} />
					<Route
						exact
						path="/badges/:badgeId"
						component={BadgeDetailsContainer}
					/>
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />

					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
export default App;
