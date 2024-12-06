import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

const Contact = () => {
	const formRef = useRef();

	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		//service_3888v68
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Pham Ngoc Khoi",
					from_email: form.email,
					to_email: "khoingoc456@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: "Thank you for your message �",
						type: "success",
					});

					setTimeout(() => {
						hideAlert(false);
						setForm({
							name: "",
							email: "",
							message: "",
						});
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: "danger",
					});
				},
			);
	};

	return (
		<section
			className="c-space my-20"
			id="contact">
			{alert.show && <Alert {...alert} />}
			<p className="head-text mb-10">Let&apos;s talk</p>

			<div className="terminal-frame max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-gray-900 text-white font-mono">
				{/* Terminal Header */}
				<div className="terminal-header flex space-x-2 mb-4">
					<FaCircle className="text-red-500" />
					<FaCircle className="text-yellow-500" />
					<FaCircle className="text-green-500" />
				</div>

				{/* Contact Content */}
				<div className="flex items-center justify-center flex-col pb-10">
					<div className="contact-container">
						<h3 className="text-xl font-bold">Let&apos;s talk</h3>
						<p className="text-md text-gray-400 mt-3">
							Whether you need to create a new website, enhance your current
							platform, or develop a unique project, I&apos;m here to assist
							you.
						</p>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="mt-6 flex flex-col space-y-5">
							<label className="space-y-2">
								<span className="field-label">Full Name</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									required
									className="field-input bg-gray-800 border border-gray-700 text-white p-2 rounded"
									placeholder="ex., John Doe"
								/>
							</label>

							<label className="space-y-2">
								<span className="field-label">Email address</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
									className="field-input bg-gray-800 border border-gray-700 text-white p-2 rounded"
									placeholder="ex., johndoe@gmail.com"
								/>
							</label>

							<label className="space-y-2">
								<span className="field-label">Your message</span>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
									className="field-input bg-gray-800 border border-gray-700 text-white p-2 rounded"
									placeholder="Share your thoughts or inquiries..."
								/>
							</label>

							<button
								className="field-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2"
								type="submit"
								disabled={loading}>
								<span>{loading ? "Sending..." : "Send Message"}</span>
								<BiArrowFromBottom className="w-4 h-4" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
