import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
	return (
		<footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
			<div className="flex gap-2">
				<div className="social-icon text-white-600 text-3xl hover:text-white-800">
					<a href="https://github.com/khoipn">
						<FaGithub />
					</a>
				</div>
				<div className="social-icon text-white-600 text-3xl hover:text-white-800">
					<a href="https://www.linkedin.com/in/khoipn21/">
						<FaLinkedin />
					</a>
				</div>
				<div className="social-icon text-white-600 text-3xl hover:text-white-800">
					<a href="https://www.facebook.com/khoi.2112/">
						<FaFacebook />
					</a>
				</div>
			</div>
			<div className="text-white-600">
				<p>©️ 2024 Khoi Pham, All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
