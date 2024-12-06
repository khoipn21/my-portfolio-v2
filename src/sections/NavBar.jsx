import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../constants";

const NavItems = () => {
	return (
		<ul className="nav-ul">
			{navLinks.map((item, index) => (
				<li key={index}>
					<a
						href={item.href}
						className="text-neutral-400 hover:text-white">
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
};

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space">
					<a
						href="/"
						className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
						KhoiPham
					</a>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
						{isOpen ? (
							<IoMdClose className="w-6 h-6 text-white" />
						) : (
							<CiMenuBurger className="w-6 h-6 text-white" />
						)}
					</button>
					<nav className="sm:flex hidden">
						<NavItems />
					</nav>
				</div>
			</div>
			<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
				<nav className="p-5">
					<NavItems />
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
