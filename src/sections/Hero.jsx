import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Workstation from "../components/Workstation";
import { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import GithubLogo from "../components/GithubLogo";
import Ring from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Typed from "typed.js";
import { tr } from "framer-motion/client";

function Hero() {
	const isSmallScreen = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmallScreen, isMobile, isTablet);
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Fullstack Developer"],
			typeSpeed: 100,
			loop: true,
			backSpeed: 100,
			cursorChar: "_",
		});

		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<section
			className="min-h-screen w-full flex flex-col relative"
			id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Pham Ngoc Khoi <span className="waving-hand">👋</span>
				</p>
				<p
					className="hero_tag text-gray_gradient"
					ref={el}></p>
			</div>

			<div className="w-full h-full absolute inset-0">
				{/* <Leva /> */}
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera
							makeDefault
							fov={45}
							position={[0, 0, 20]}
						/>

						<HeroCamera isMobile={isMobile}>
							<Workstation
								// scale={0.5}
								position={sizes.deskPosition}
								rotation={[0, -100, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<GithubLogo position={sizes.githubLogoPosition} />
							<Ring position={sizes.ringPosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight
							intensity={2}
							position={[0, 0, 5]}
						/>
					</Suspense>
				</Canvas>
				<div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center space-x-4">
					<a
						href="#contact"
						className="w-fit">
						<Button
							name="Reach out to me 📧"
							isOn={true}
							containerClass="sm:w-fit w-full sm:min-w-96"
						/>
					</a>
					<a
						href="/assets/khoipn_resume.pdf"
						download="khoipn_resume.pdf"
						className="w-fit">
						<Button
							name="Download my resume 📄"
							isOn={true}
							containerClass="sm:w-fit w-full sm:min-w-96"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
