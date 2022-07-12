// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./global.css"; //importa modificaicones a bootstrap
// import Badge from "./components/Badge";
// import BadgesNew from "./components/Pages/BadgesNew";
import Badges from "./components/Pages/Badges";
import BadgesNew from "./components/Pages/BadgesNew";
import App from "./components/App";


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
	<App
	// firstName="Diego"
	// lastName="Dorado"
	// jobTitle="Frontend Dev"
	// twitter="diego_dorado"
	// avatarUrl="https://s.gravatar.com/avatar/daa7525f3216837201eab4dcc82c06df?s=80"
	/>,
	container
);
