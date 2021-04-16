import React from "react";
import Modal from "./Modal";
function DeleteBadgeModal(props) {
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<div className="DeleteBadgeModal">
				<h1> Estas segur@?</h1>
				<p> Estas a punto de Eliminar el Badge</p>
				<div>
					<button onClick={props.onDeleteBadge} className="btn btn-danger m-2">
						Eliminar
					</button>
					<button onClick={props.onClose} className="btn btn-primary m-2">
						Cancelar
					</button>
				</div>
			</div>
		</Modal>
	);
}
export default DeleteBadgeModal;
