import { useEffect, useState } from "react";
import MoleculeDemo from "../MoleculeViewer";
import CareersSection from "./CareersSection";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";

export default function HomePage() {
	const [isMobile, setIsMobile] = useState(false);

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
				<Header isMobile={isMobile} />

				<HeroSection />

				<ContentSection
					title="Interactive 3D Visualization"
					description={
						<>
							<p className="text-lg text-[#6b7280] leading-relaxed mb-6">
								Experience cutting-edge molecular visualization powered by
								Three.js and React Three Fiber. Our platform enables researchers
								to interact with complex protein structures in real-time.
							</p>
							<p className="text-lg text-[#6b7280] leading-relaxed">
								Featuring realistic materials, smooth animations, and intuitive
								controls designed for scientific exploration and analysis.
							</p>
						</>
					}
					imagePosition="right"
				>
					<MoleculeDemo />
				</ContentSection>

				<ContentSection
					title="Section Title Two"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
					imagePosition="left"
				/>

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

				<TeamSection />

				<CareersSection />
			</main>

			<Footer />
		</div>
	);
}
