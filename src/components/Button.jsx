import React from "react";

function Button({ name, isOn = false, containerClass }) {
	return (
		<button className={`btn ${containerClass}`}>
			{isOn && (
				<span className="relative flex h-3 w-3">
					<span className="btn-ping"></span>
					<span className="btn-ping_dot"></span>
				</span>
			)}
			{name}
		</button>
	);
}

export default Button;
