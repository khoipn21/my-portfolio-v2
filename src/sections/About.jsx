import { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { FaCopy, FaCheck } from "react-icons/fa";

function About() {
	const [hasEmailCopied, setHasEmailCopied] = useState(false);
	const [hasPhoneCopied, setHasPhoneCopied] = useState(false);
	const [intersect, setIntersect] = useState(false);
	const sectionRef = useRef(null);

	const handleEmailCopy = () => {
		navigator.clipboard.writeText("khoingoc456@gmail.com");
		setHasEmailCopied(true);

		setTimeout(() => {
			setHasEmailCopied(false);
		}, 2000);
	};

	const handlePhoneCopy = () => {
		navigator.clipboard.writeText("(+84) 832 221 1203");
		setHasPhoneCopied(true);

		setTimeout(() => {
			setHasPhoneCopied(false);
		}, 2000);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIntersect(true);
					} else {
						setIntersect(false);
					}
				});
			},
			{
				threshold: 0.1, // Adjust as needed
			},
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`c-space my-20 ${
				intersect
					? "motion-preset-fade motion-duration-2000"
					: "opacity-0 transition-opacity duration-1000"
			}`}
			id="about">
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid1.png"
							alt="grid-1"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Hi, I&apos;m Khoi</p>
							<p className="grid-subtext">
								I&apos;m A motivated and detail-oriented fresher in fullstack
								development, passionate about creating efficient, user-friendly
								solutions. Eager to contribute to a dynamic team, continuously
								learn, and grow in the field of software development.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid2.png"
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I have expertise in various languages, frameworks, and tools
								that enable me to create intuitive and user-focused
								applications.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0, 0, 0, 0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								labelsData={[
									{
										lat: 10.85,
										lng: 106.85,
										text: "Ho Chi Minh City, Vietnam",
										color: "white",
										size: 15,
									},
								]}
							/>
						</div>
						<div>
							<p className="grid-headtext">I&apos;m open to work now!</p>
							<p className="grid-subtext">
								I&apos;m based in Ho Chi Minh City, Vietnam and open to work
								fulltime. Feel free to contact me anytime!
							</p>
							<Button
								name="Contact Me"
								isOn
								containerClass="w-full mt-10"
							/>
						</div>
					</div>
				</div>

				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid3.png"
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">My Passion for Coding</p>
							<p className="grid-subtext">
								I&apos;m passionate about solving problems and bringing ideas to
								life through code. Programming is more than just a career for
								me—it&apos;s what I love doing. I thrive on exploring new
								technologies and continually sharpening my skills.
							</p>
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src="assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>

						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact me</p>
							<div
								className="copy-container"
								onClick={handleEmailCopy}>
								{hasEmailCopied ? (
									<FaCheck className="text-green-500" />
								) : (
									<FaCopy className="text-white text-xl" />
								)}
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									khoingoc456@gmail.com
								</p>
							</div>
							<div
								className="copy-container"
								onClick={handlePhoneCopy}>
								{hasPhoneCopied ? (
									<FaCheck className="text-green-500" />
								) : (
									<FaCopy className="text-white text-xl" />
								)}
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									(+84) 832 221 1203
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
