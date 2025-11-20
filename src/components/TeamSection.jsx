import { useState } from "react";
import teamPhoto from "../assets/7206_watermark_01.jpg";
import christophPhoto from "../assets/christoph_watermark_optimized.jpg";
import constiPhoto from "../assets/consti_watermark_optimized.jpg";
import georgPhoto from "../assets/gw_watermark_optimized.jpg";
import jambaPhoto from "../assets/jamba_watermark_optimized.jpg";
import juanPhoto from "../assets/juan_watermark_optimized.jpg";
import patriciaPhoto from "../assets/patricia_watermark_optimized.jpg";
import paulynaPhoto from "../assets/paulyna_watermark_optimized.jpg";

const TEAM_MEMBERS = [
	{
		name: "Christoph Wichmann, PhD",
		role: "Managing Partner | Co-Founder",
		expertise: "Proteomics | Scientific Software Development",
		bio: [
			"Dr. Christoph Wichmann co-founded Aplusia to bring advanced computational solutions to biotechnology and data-intensive industries. He combines deep expertise in computational proteomics with proven entrepreneurial experience, having led the Exist Project Harmonize to develop a flavor engineering platform for the food industry.",
			"Before this, he earned his PhD in Theoretical Physics from Ludwig-Maximilians-Universität München and completed postdoctoral research at the Max Planck Institute of Biochemistry, where he contributed to MaxQuant and Perseus software development and created MaxQuant Live for real-time mass spectrometer control. With strong programming skills across multiple languages he brings proven expertise in translating cutting-edge research into practical software solutions.",
		],
		social: {
			linkedin: "",
			github: "",
			twitter: "",
		},
		image: christophPhoto,
	},
	{
		name: "Georg Wallmann",
		role: "Managing Partner | Co-Founder",
		expertise: "Artificial Intelligence | Scientific Software Development",
		bio: [
			"Georg Wallmann founded Aplusia to support companies building robust data platforms, supporting every increasing data volumes in Biotech and Pharma. He brings extensive experience as a Scientific Software Engineer in Proteomics, working on transfer learning-based DIA search engines (alphaDIA). His particular interest lies at the intersection of large-scale data collection and custom artificial intelligence solutions for biological research.",
			"Georg earned his Master's degree in Biochemistry from Ludwig-Maximilians-Universität München. His research experience includes previous work with Nikolai Slavov on DIA multiplexing, where he developed computational tools and algorithms for quantitative proteomics analysis. He is currently completing his PhD from the Max Planck Institute in the Mann Lab.",
		],
		social: {
			linkedin: "https://www.linkedin.com/in/georg-wallmann-926433189/",
			github: "",
			twitter: "",
		},
		image: georgPhoto,
	},
	{
		name: "Juan Restrepo, PhD",
		role: "Consultant",
		expertise: "Bioinformatics | Proteomics",
		bio: [
			"Juan Restrepo is a PhD candidate in Algorithm Design in Bioinformatics at the Max Planck Institute of Biochemistry in Munich, where he develops machine learning algorithms for proteomic signal analysis.",
			"Juan earned his Master's degree in Physics from Technische Universität München and his Bachelor's degree in the same field from Universidad de Antioquia, Colombia. His research experience includes work at the Helmholtz Zentrum on single-cell data analysis and algorithm development for lineage inference. He has contributed to proteomics research through publications on mass spectrometry identification methods and peptide collision cross section analysis, bringing expertise in computational biology, data science, and machine learning to complex biological datasets.",
		],
		social: {
			linkedin: "",
			github: "",
			twitter: "",
		},
		image: juanPhoto,
	},
	{
		name: "Patricia Skowronek, PhD",
		role: "Consultant",
		expertise: "Bioinformatics | LLMs",
		bio: [
			"Patricia Skowronek is a proteomics expert and analytical chemist who completed her PhD and postdoctoral research at the Max Planck Institute of Biochemistry in Munich under the supervision of Prof. Matthias Mann, Germany's most cited researcher and proteomics pioneer.",
			"Patricia earned her Master's degree in Chemistry from Ludwig Maximilian University of Munich, graduating first in her class, and her Bachelor's degree in Biochemistry and Chemistry. During her time at the Mann lab, she developed novel mass spectrometry methods that achieved like diaPASEF and created py_diAID, an open-source Python tool with Bayesian optimization algorithms that has been widely adopted across the proteomics community. She brings expertise in analytical chemistry, bioinformatics, and generative AI to transform complex biological workflows into accessible, automated solutions for researchers and clinical applications.",
		],
		social: {
			linkedin: "https://www.linkedin.com/in/patriciaskowronek/",
			github: "",
			twitter: "",
		},
		image: patriciaPhoto,
	},
	{
		name: "Constantin Ammar, PhD",
		role: "Consultant in Residence",
		expertise: "Bioinformatics | Proteomics",
		bio: [
			"Dr. Constantin Ammar is a bioinformatics consultant specializing in proteomics and data science. He recently completed his postdoctoral research at the Max Planck Institute of Biochemistry in Munich, where he developed computational tools and algorithms for quantitative proteomics analysis in the Mann Lab.",
			"Dr. Ammar earned his PhD in Bioinformatics from Ludwig-Maximilians-Universität München. He holds Master's and Bachelor's degrees in Physics and has international research experience from Harvard University's Department of Systems Biology. His research has focused on advanced quantification algorithms (AlphaQuant, RefQuant) and DIA multiplexing (mDIA), developing open-source software solutions for cutting-edge proteomics applications.",
		],
		social: {
			linkedin: "",
			github: "",
			twitter: "",
		},
		image: constiPhoto,
	},
	{
		name: "Paulyna Mendoza",
		role: "Head of Operations",
		expertise: "",
		bio: [
			"Expert in machine learning applications for proteomics and metabolomics.",
		],
		social: {
			linkedin: "",
			github: "",
			twitter: "",
		},
		image: paulynaPhoto,
	},
	{
		name: "Jambaldorj Ochirpuyrev",
		role: "Software Engineer",
		expertise: "",
		bio: ["Specialist in genomic data analysis and computational drug design."],
		social: {
			linkedin: "",
			github: "",
			twitter: "",
		},
		image: jambaPhoto,
	},
];

export default function TeamSection() {
	const [selectedMember, setSelectedMember] = useState(null);
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setSelectedMember(null);
			setIsClosing(false);
		}, 300);
	};

	return (
		<>
			{/* Fullscreen Overlay */}
			{selectedMember && (
				<div
					className="fixed inset-0 z-50 bg-white overflow-y-auto"
					style={{
						backgroundImage:
							"radial-gradient(circle, #d1d5db 1px, transparent 1px)",
						backgroundSize: "40px 40px",
						backgroundPosition: "0 0",
						animation: isClosing
							? "fadeOut 0.3s ease-in-out"
							: "fadeIn 0.3s ease-in-out",
					}}
				>
					{/* Fade overlay */}
					<div
						className="fixed inset-0 pointer-events-none z-[51]"
						style={{
							background:
								"linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)",
						}}
					/>

					{/* Content */}
					<div
						className="max-w-[1600px] mx-auto relative z-[52] px-[20px] py-20"
						style={{
							animation: isClosing
								? "slideDown 0.3s ease-in-out"
								: "slideUp 0.3s ease-in-out",
						}}
					>
						{/* Back button */}
						<button
							type="button"
							onClick={handleClose}
							className="mb-12 flex items-center gap-2 text-[#6b7280] hover:text-[#75bb2b] transition-colors duration-200 bg-transparent border-0 cursor-pointer text-lg"
						>
							<span>←</span>
							<span>Back to Team</span>
						</button>

						{/* Member details */}
						<div className="flex flex-col md:flex-row gap-12 items-start">
							<div className="w-full md:w-1/3">
								<div className="aspect-square rounded-2xl overflow-hidden">
									<img
										src={selectedMember.image}
										alt={selectedMember.name}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="flex-1">
								<h1 className="text-5xl text-[#1f2937] mb-4">
									{selectedMember.name}
								</h1>
								<p className="text-2xl text-[#75bb2b] mb-8">
									{selectedMember.role}
								</p>
								<div className="mb-8">
									{selectedMember.bio.map((paragraph) => (
										<p
											key={paragraph.slice(0, 50)}
											className="text-xl text-[#6b7280] leading-relaxed mb-6 last:mb-0"
										>
											{paragraph}
										</p>
									))}
								</div>
								{selectedMember.expertise && (
									<div className="mt-8 pt-8 border-t border-gray-200">
										<h3 className="text-meta text-[#1f2937] mb-3">EXPERTISE</h3>
										<p className="text-lg text-[#6b7280]">
											{selectedMember.expertise}
										</p>
									</div>
								)}
								{selectedMember.social &&
									(selectedMember.social.linkedin ||
										selectedMember.social.github ||
										selectedMember.social.twitter) && (
										<div className="mt-8 pt-8 border-t border-gray-200">
											<h3 className="text-meta text-[#1f2937] mb-4">CONNECT</h3>
											<div className="flex gap-4">
												{selectedMember.social.linkedin && (
													<a
														href={selectedMember.social.linkedin}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-2 text-[#6b7280] hover:text-[#75bb2b] transition-colors duration-200"
													>
														<svg
															className="w-5 h-5"
															fill="currentColor"
															viewBox="0 0 24 24"
															aria-label="LinkedIn"
														>
															<title>LinkedIn</title>
															<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
														</svg>
														LinkedIn
													</a>
												)}
												{selectedMember.social.github && (
													<a
														href={selectedMember.social.github}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-2 text-[#6b7280] hover:text-[#75bb2b] transition-colors duration-200"
													>
														<svg
															className="w-5 h-5"
															fill="currentColor"
															viewBox="0 0 24 24"
															aria-label="GitHub"
														>
															<title>GitHub</title>
															<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
														</svg>
														GitHub
													</a>
												)}
												{selectedMember.social.twitter && (
													<a
														href={selectedMember.social.twitter}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-2 text-[#6b7280] hover:text-[#75bb2b] transition-colors duration-200"
													>
														<svg
															className="w-5 h-5"
															fill="currentColor"
															viewBox="0 0 24 24"
															aria-label="Twitter"
														>
															<title>Twitter</title>
															<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
														</svg>
														Twitter
													</a>
												)}
											</div>
										</div>
									)}
							</div>
						</div>
					</div>
				</div>
			)}
			<section id="team" className="mt-32">
				<h2 className="text-5xl text-[#1f2937] mb-16">OUR TEAM</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{TEAM_MEMBERS.map((member, index) => (
						<button
							type="button"
							key={member.name}
							className="flex flex-col group cursor-pointer text-left bg-transparent border-0 p-0 w-full"
							onClick={() => index < 5 && setSelectedMember(member)}
							disabled={index >= 5}
						>
							<div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover"
								/>
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
					))}
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
		</>
	);
}
