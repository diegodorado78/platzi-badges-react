import React from "react";

import "./styles/PageError.css";

function PageError(props) {
	return <div className="PageError">❌{props.error.message}😱</div>; //traigo props (state) error de badges
}

export default PageError;
