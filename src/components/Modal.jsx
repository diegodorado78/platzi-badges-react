import React from "react";
import ReactDOM from "react-dom";
import "../components/styles/Modal.css";

function Modal(props) {
	if (!props.isOpen) {
		return null;
	}
	return ReactDOM.createPortal(
		//ayudan a renderizar un elemento fuera del nodo principal de nuestro sitio
		<div className="Modal">
			<div className="Modal__container">
				<button onClick={props.onClose} className="Modal__close-button">
					x
				</button>
				{props.children}
			</div>
		</div>,
		document.getElementById("modal")
	);
}
export default Modal;
