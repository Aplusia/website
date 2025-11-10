import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import heroBg from "./assets/pexels-mucahttbeyhan-16313978.png";

export default function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className="min-h-screen h-auto overflow-auto bg-white relative">
			{/* Fixed background */}
			<div
				className="fixed inset-0 z-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, #d1d5db 1px, transparent 1px)",
					backgroundSize: "20px 20px",
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
						<h2 className="text-white text-5xl font-bold mb-4">
							AI for Life Sciences
						</h2>
						<p className="text-white text-3xl leading-tight">
							Data Platforms for the next
							<br />
							generation of Drug Discovery
						</p>
					</div>
				</section>

				{/* Section 1 - Text Left, Placeholder Right */}
				<section className="mt-20 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1">
						<h3 className="text-4xl font-bold text-[#1f2937] mb-4">
							Section Title One
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

				{/* Section 2 - Placeholder Left, Text Right */}
				<section className="mt-20 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
						<span className="text-gray-400 text-xl">Placeholder</span>
					</div>
					<div className="flex-1">
						<h3 className="text-4xl font-bold text-[#1f2937] mb-4">
							Section Title Two
						</h3>
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
						<h3 className="text-4xl font-bold text-[#1f2937] mb-4">
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
			</main>

			{/* Hero Section */}
			<section
				className={`relative ${isMobile ? "h-auto min-h-[calc(100vh-60px)] pt-10 pb-[60px]" : "h-[calc(100vh-80px)] pt-0 pb-0"} flex ${isMobile ? "items-start" : "items-center"} overflow-visible`}
			>
				<div
					className={`flex ${isMobile ? "flex-col gap-10" : "flex-row gap-[100px]"} w-full max-w-[1400px] mx-auto ${isMobile ? "px-5" : "px-[60px]"} items-center`}
				>
					{/* Text Section */}
					<div
						className={`flex-1 z-10 ${isMobile ? "text-center" : "text-left"}`}
					>
						<h1
							className={`${isMobile ? "text-[48px]" : "text-[72px]"} font-extrabold leading-[1.1] text-[#1f2937] mb-6`}
							style={{ letterSpacing: "-2px" }}
						>
							Interactive <span className="text-[#10b981]">3D</span>
							<br />
							molecule
							<br />
							visualization
						</h1>
						<p
							className={`${isMobile ? "text-lg" : "text-xl"} text-[#6b7280] leading-[1.6] ${isMobile ? "max-w-full mx-auto" : "max-w-[500px]"} mb-10`}
						>
							Experience cutting-edge molecular visualization powered by
							Three.js and React Three Fiber. Featuring interactive controls,
							realistic materials, and smooth animations.
						</p>
						<div
							className={`flex ${isMobile ? "flex-col gap-[10px]" : "flex-row gap-0"} items-center`}
						>
							<button
								type="button"
								className={`bg-[#1f2937] text-white ${isMobile ? "px-7 py-[14px] text-base mb-0" : "px-8 py-4 text-lg mr-4 mb-0"} rounded-xl border-none font-semibold cursor-pointer hover:bg-[#111827]`}
								style={{ transition: "all 0.2s ease" }}
							>
								Explore Demo
							</button>
							<button
								type="button"
								className={`bg-transparent text-[#1f2937] ${isMobile ? "px-7 py-[14px] text-base" : "px-8 py-4 text-lg"} rounded-xl border-2 border-[#e5e7eb] font-semibold cursor-pointer hover:border-[#d1d5db]`}
								style={{ transition: "all 0.2s ease" }}
							>
								View Code
							</button>
						</div>
					</div>

					{/* Molecule Section */}
					<div
						className={`flex-1 ${isMobile ? "h-[600px]" : "h-[1600px]"} w-full relative z-10 flex items-center justify-center`}
					>
						{/* <MoleculeDemo /> */}
					</div>
				</div>
			</section>
		</div>
	);
}
