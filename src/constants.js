export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Projects",
		href: "#projects",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.1 : isMobile ? 0.15 : 0.22,
		deskPosition: isMobile ? [0.5, -2, 0] : [0, -4, 2],
		githubLogoPosition: isSmall
			? [4, -5, 0]
			: isMobile
			? [5, -5, 0]
			: isTablet
			? [5, -5, 0]
			: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [5, 4, 0]
			: isTablet
			? [5, 4, 0]
			: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
			? [-10, 10, 0]
			: isTablet
			? [-12, 10, 0]
			: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
			? [-9, -10, -10]
			: isTablet
			? [-11, -7, -10]
			: [-13, -13, -10],
	};
};
export const myProjects = [
	{
		title: "Murmur Chatapp",
		desc: "A real-time chat web application that supports multiple users using WebSocket",
		subdesc:
			"Friendly front-end UI/UX implemented with React and ChakraUI. Designed the back-end using Golang with PostgreSQL and Redis for database and caching. Implemented Docker for environment consistency across deployments. Using AWS EC2 for hosting and AWS S3 for data storage",
		href: "https://github.com/khoipn21/murmur-chatapp",
		texture: "/textures/projects/project1.png",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "ChakraUI",
				path: "/assets/chakra-ui.svg",
			},
			{
				id: 3,
				name: "Golang",
				path: "/assets/golang.svg",
			},
			{
				id: 4,
				name: "PostgreSQL",
				path: "/assets/postgresql.svg",
			},
		],
	},
	{
		title: "Onigiri Bookstore",
		desc: "A Simple user friendly e-commerce bookstore website. Key Features: Product search, shopping cart, order management, and an admin panel for content control.",
		subdesc:
			"Frontend is built with ReactJS for dynamic interfaces, styled using Bootstrap 5, and managed with Redux for efficient state control. Backend is developed using Node.js and Express.js for server-side logic, with MongoDB as the NoSQL database. Secure JWT-based user authentication with role-specific (user/admin) access",
		href: "https://github.com/khoipn21/TMDT-main",
		texture: "/textures/projects/project2.png",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "Bootstrap",
				path: "/assets/bootstrap.svg",
			},
			{
				id: 3,
				name: "Node.js",
				path: "/assets/nodejs.svg",
			},
			{
				id: 4,
				name: "MongoDB",
				path: "/assets/mongodb.svg",
			},
		],
	},
];
