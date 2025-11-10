import { useEffect, useState } from "react";
import teamPhoto from "../assets/7206_watermark_01.jpg";
import logo from "../assets/logo.svg";
import heroBg from "../assets/pexels-mucahttbeyhan-16313978.png";
import MoleculeDemo from "../MoleculeViewer";

export default function HomePage() {
	const [isMobile, setIsMobile] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className="min-h-screen bg-white relative">
			{/* Fixed background */}
			<div
				className="fixed inset-0 z-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, #d1d5db 1px, transparent 1px)",
					backgroundSize: "40px 40px",
					backgroundPosition: "0 0",
				}}
			/>
			{/* Fade overlay */}
			<div
				className="fixed inset-0 pointer-events-none z-[1]"
				style={{
					background: isMobile
						? "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
						: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)",
				}}
			/>

			{/* Main content container */}
			<main className="max-w-[1600px] mx-auto relative z-20 px-[20px]">
				{/* Header */}
				<header
					className={`flex justify-between items-center ${isMobile ? "px-5 py-[15px] gap-[15px]" : " gap-0"} mt-[100px] flex-wrap`}
				>
					<div className="flex items-center">
						<img
							src={logo}
							alt="Logo"
							className={`${isMobile ? "h-16" : "h-24"}`}
						/>
					</div>
					<nav
						className={`flex ${isMobile ? "gap-5" : "gap-10"} items-center flex-wrap`}
					>
						<a
							href="/#what-we-do"
							className={`text-[#6b7280] no-underline ${isMobile ? "text-sm" : "text-base"} hover:text-[#1f2937] cursor-pointer`}
							style={{ transition: "color 0.2s ease" }}
						>
							What we do
						</a>
						<a
							href="/#team"
							className={`text-[#6b7280] no-underline ${isMobile ? "text-sm" : "text-base"} hover:text-[#1f2937] cursor-pointer`}
							style={{ transition: "color 0.2s ease" }}
						>
							Team
						</a>
						<a
							href="/#case-studies"
							className={`text-[#6b7280] no-underline ${isMobile ? "text-sm" : "text-base"} hover:text-[#1f2937] cursor-pointer`}
							style={{ transition: "color 0.2s ease" }}
						>
							Case studies
						</a>
						<a
							href="/#contact"
							className={`text-white bg-black no-underline ${isMobile ? "text-xs px-3 py-1" : "text-sm px-4 py-1"} rounded-full cursor-pointer hover:bg-[#1f2937]`}
							style={{ transition: "background-color 0.2s ease" }}
						>
							get in contact
						</a>
					</nav>
				</header>

				{/* AI for Life Sciences Section */}
				<section className="mt-10 rounded-3xl overflow-hidden relative h-[600px] flex items-end">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url(${heroBg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							transform: "scaleX(-1)",
						}}
					/>
					<div className="z-10 relative px-12 pb-12">
						<h2 className="text-white text-5xl mb-4">AI for Life Sciences</h2>
						<p className="text-white text-3xl leading-tight">
							Data Platforms for the next
							<br />
							generation of Drug Discovery
						</p>
					</div>
				</section>

				{/* Section 1 - Text Left, Molecule Demo Right */}
				<section className="mt-20 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1">
						<h3 className="text-4xl text-[#1f2937] mb-4">
							Interactive 3D Visualization
						</h3>
						<p className="text-lg text-[#6b7280] leading-relaxed mb-6">
							Experience cutting-edge molecular visualization powered by
							Three.js and React Three Fiber. Our platform enables researchers
							to interact with complex protein structures in real-time.
						</p>
						<p className="text-lg text-[#6b7280] leading-relaxed">
							Featuring realistic materials, smooth animations, and intuitive
							controls designed for scientific exploration and analysis.
						</p>
					</div>
					<div className="flex-1 rounded-2xl h-[600px] flex items-center justify-center overflow-hidden">
						<MoleculeDemo />
					</div>
				</section>

				{/* Section 2 - Placeholder Left, Text Right */}
				<section className="mt-20 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
						<span className="text-gray-400 text-xl">Placeholder</span>
					</div>
					<div className="flex-1">
						<h3 className="text-4xl text-[#1f2937] mb-4">Section Title Two</h3>
						<p className="text-lg text-[#6b7280] leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris.
						</p>
					</div>
				</section>

				{/* Section 3 - Text Left, Placeholder Right */}
				<section className="mt-20 mb-20 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1">
						<h3 className="text-4xl text-[#1f2937] mb-4">
							Section Title Three
						</h3>
						<p className="text-lg text-[#6b7280] leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris.
						</p>
					</div>
					<div className="flex-1 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
						<span className="text-gray-400 text-xl">Placeholder</span>
					</div>
				</section>

				{/* Team Section */}
				<section id="team" className="mt-32 mb-20">
					<h2 className="text-5xl text-[#1f2937] mb-16">OUR TEAM</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								name: "Christoph Wichmann, PhD",
								role: "Managing Partner | Co-Founder",
								bio: "PhD in Computational Biology with 15 years experience in drug discovery platforms.",
							},
							{
								name: "Georg Wallmann",
								role: "Managing Partner | Co-Founder",
								bio: "Former Tech Lead at major pharmaceutical company, specializing in AI/ML systems.",
							},
							{
								name: "Juan Restrepo Lopez, PhD",
								role: "Consultant",
								bio: "Full-stack developer with expertise in scalable data platforms and cloud architecture.",
							},
							{
								name: "Patricia Skowronek, PhD",
								role: "Consultant",
								bio: "Molecular biologist focused on target identification and validation workflows.",
							},
							{
								name: "Constantin Ammar, PhD",
								role: "Consultant in Residence",
								bio: "10+ years driving product strategy in life sciences technology companies.",
							},
							{
								name: "Paulyna Mendoza",
								role: "Head of Operations",
								bio: "Expert in machine learning applications for proteomics and metabolomics.",
							},
							{
								name: "Jambaldorj Ochirpuyrev",
								role: "Software Engineer",
								bio: "Specialist in genomic data analysis and computational drug design.",
							},
						].map((member, index) => {
							const members = [
								{
									name: "Christoph Wichmann, PhD",
									role: "Managing Partner | Co-Founder",
									bio: "PhD in Computational Biology with 15 years experience in drug discovery platforms.",
								},
								{
									name: "Georg Wallmann",
									role: "Managing Partner | Co-Founder",
									bio: "Former Tech Lead at major pharmaceutical company, specializing in AI/ML systems.",
								},
								{
									name: "Juan Restrepo Lopez, PhD",
									role: "Consultant",
									bio: "Full-stack developer with expertise in scalable data platforms and cloud architecture.",
								},
								{
									name: "Patricia Skowronek, PhD",
									role: "Consultant",
									bio: "Molecular biologist focused on target identification and validation workflows.",
								},
								{
									name: "Constantin Ammar, PhD",
									role: "Consultant in Residence",
									bio: "10+ years driving product strategy in life sciences technology companies.",
								},
								{
									name: "Paulyna Mendoza",
									role: "Head of Operations",
									bio: "Expert in machine learning applications for proteomics and metabolomics.",
								},
								{
									name: "Jambaldorj Ochirpuyrev",
									role: "Software Engineer",
									bio: "Specialist in genomic data analysis and computational drug design.",
								},
							];

							const selectedIndex = members.indexOf(selectedMember);
							const currentRow = Math.floor(index / 4);
							const selectedRow =
								selectedIndex !== -1 ? Math.floor(selectedIndex / 4) : -1;
							const rowEnd = Math.floor(index / 4) * 4 + 3;
							const isLastInRow = index === rowEnd || index === 6;
							const shouldShowBio =
								selectedMember && currentRow === selectedRow && isLastInRow;

							return (
								<>
									<button
										type="button"
										key={member.name}
										className="flex flex-col group cursor-pointer text-left bg-transparent border-0 p-0 w-full"
										onClick={
											index < 5 ? () => setSelectedMember(member) : undefined
										}
										disabled={index >= 5}
									>
										<div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
											<span className="text-gray-400 text-sm">
												{member.name}
											</span>
										</div>
										<h3
											className={`text-xl text-[#1f2937] mb-1 transition-colors duration-200 ${index < 5 ? "group-hover:text-[#75bb2b]" : ""}`}
										>
											{member.name}
										</h3>
										<p
											className={`text-meta text-[#6b7280] mb-3 transition-colors duration-200 ${index < 5 ? "group-hover:text-[#75bb2b]" : ""}`}
										>
											{member.role}
										</p>
										{index < 5 && (
											<span className="font-mono text-sm text-[#6b7280] group-hover:text-[#75bb2b] transition-colors duration-200">
												READ BIO
											</span>
										)}
									</button>
									{shouldShowBio && (
										<div className="col-span-full bg-gray-50 rounded-3xl p-12 relative mt-8">
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													setSelectedMember(null);
												}}
												className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none"
											>
												×
											</button>
											<div className="max-w-3xl">
												<h3 className="text-3xl text-[#1f2937] mb-2">
													{selectedMember.name}
												</h3>
												<p className="text-meta text-[#75bb2b] mb-6">
													{selectedMember.role}
												</p>
												<p className="text-lg text-[#6b7280] leading-relaxed">
													{selectedMember.bio}
												</p>
											</div>
										</div>
									)}
								</>
							);
						})}
						{/* Group Photo */}
						<div className="flex flex-col items-center text-center group">
							<div className="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<img
									src={teamPhoto}
									alt="Aplusia Team"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Hiring Section */}
				<section
					id="careers"
					className="mt-32 mb-20 bg-gray-50 rounded-3xl p-12"
				>
					<div className="flex flex-col md:flex-row gap-8">
						<h2 className="text-5xl text-[#1f2937] md:w-1/3 flex-shrink-0">
							OPEN ROLES
						</h2>
						<div className="space-y-0 md:w-2/3">
							{[
								{
									title: "Software Engineer",
									location: "REMOTE",
									date: "11.10.25",
								},
								{
									title: "Senior Data Scientist",
									location: "CAMBRIDGE, MA USA",
									date: "11.10.25",
								},
								{
									title: "Consultant, Life Sciences",
									location: "REMOTE",
									date: "11.10.25",
								},
								{
									title: "Senior Machine Learning Engineer",
									location: "CAMBRIDGE, MA",
									date: "11.15.25",
								},
								{
									title: "Product Manager",
									location: "CAMBRIDGE, MA USA",
									date: "11.20.25",
								},
							].map((job) => (
								<div
									key={job.title}
									className="border-t border-dotted border-gray-300 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors duration-200 px-4 -mx-4 cursor-pointer group"
								>
									<div className="flex flex-col text-sm text-[#6b7280] group-hover:text-[#75bb2b] transition-colors duration-200">
										<span>{job.location}</span>
										<span>{job.date}</span>
									</div>
									<h3 className="text-2xl md:text-3xl text-[#1f2937] md:text-right flex-1 group-hover:text-[#75bb2b] transition-colors duration-200">
										{job.title}
									</h3>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-black text-white relative z-20">
				<div className="max-w-[1600px] mx-auto px-[20px] py-16">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
						{/* Company Info */}
						<div>
							<img
								src={logo}
								alt="Logo"
								className="h-16 mb-4 brightness-0 invert"
							/>
							<p className="text-gray-400 text-sm leading-relaxed">
								AI-powered data platforms for the next generation of drug
								discovery.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-white mb-4">Quick Links</h4>
							<ul className="space-y-3">
								<li>
									<a
										href="/#what-we-do"
										className="text-gray-400 hover:text-white transition-colors text-sm"
									>
										What we do
									</a>
								</li>
								<li>
									<a
										href="/#team"
										className="text-gray-400 hover:text-white transition-colors text-sm"
									>
										Team
									</a>
								</li>
								<li>
									<a
										href="/#case-studies"
										className="text-gray-400 hover:text-white transition-colors text-sm"
									>
										Case studies
									</a>
								</li>
								<li>
									<a
										href="/#careers"
										className="text-gray-400 hover:text-white transition-colors text-sm"
									>
										Careers
									</a>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="text-white mb-4">Contact</h4>
							<ul className="space-y-3">
								<li className="text-gray-400 text-sm">info@company.com</li>
								<li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
								<li className="text-gray-400 text-sm">
									123 Innovation Drive
									<br />
									San Francisco, CA 94105
								</li>
							</ul>
						</div>

						{/* Social */}
						<div>
							<h4 className="text-white mb-4">Follow Us</h4>
							<div className="flex gap-4">
								<a
									href="https://linkedin.com"
									className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
									aria-label="LinkedIn"
								>
									<span className="text-sm">Li</span>
								</a>
								<a
									href="https://twitter.com"
									className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
									aria-label="Twitter"
								>
									<span className="text-sm">Tw</span>
								</a>
								<a
									href="https://github.com"
									className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
									aria-label="GitHub"
								>
									<span className="text-sm">Gh</span>
								</a>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Aplusia. All rights reserved.
						</p>
						<div className="flex gap-6">
							<a
								href="/privacy"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Privacy Policy
							</a>
							<a
								href="/terms"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
