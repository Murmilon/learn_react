import React from "react";
import c from './Dialogs.module.css'

const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.dialog
	)
}

const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				<div className={c.dialog}>
					Dmitriy
				</div>
				<div className={c.dialog}>
					Andrey
				</div>
				<div className={c.dialog}>
					Sveta
				</div>
				<div className={c.dialog}>
					Sasha
				</div>
				<div className={c.dialog}>
					Viktor
				</div>
				<div className={c.dialog}>
					Valeriy
				</div>
			</div>
			<div className={c.messages}>
				<div className={c.message}>
					Hi
				</div>
				<div className={c.message}>
					Hello
				</div>
				<div className={c.message}>
					Yo
				</div>
			</div>
		</div>
	)
}

export default Dialogs;