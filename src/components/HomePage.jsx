import { useEffect, useState } from "react";
import MoleculeDemo from "../MoleculeViewer";
import CareersSection from "./CareersSection";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import WorkTogetherSection from "./WorkTogetherSection";

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
					title="Reliable Data Platforms"
					description={
						<p className="text-lg text-[#6b7280] leading-relaxed">
							Research and investment decisions require consistent, traceable
							data. We build platforms that provide the same reliable results
							across different users and use cases. Our systems maintain data
							lineage, ensure reproducibility, and give teams confidence in
							their analyses whether they're running daily experiments or
							presenting to stakeholders.
						</p>
					}
					imagePosition="right"
				>
					<MoleculeDemo />
				</ContentSection>

				<ContentSection
					title="Fast Proof of Concept"
					description={
						<p className="text-lg text-[#6b7280] leading-relaxed">
							We deliver validated computational solutions through rapid
							iteration cycles. Our approach combines scientific rigor with
							software engineering best practices to accelerate discovery
							timelines and reduce development risk.
						</p>
					}
					imagePosition="left"
				/>

				<section className="mt-32 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1">
						<h3 className="text-4xl text-[#1f2937] mb-4">
							When Science becomes Software
						</h3>
						<p className="text-lg text-[#6b7280] leading-relaxed">
							From proof-of-concept algorithms to production bioinformatics
							pipelines. We develop the computational methods your science
							needs, then engineer them to handle real-world data volumes.
						</p>
					</div>
					<div className="flex-1 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
						<span className="text-gray-400 text-xl">Placeholder</span>
					</div>
				</section>

				<TeamSection />

				<WorkTogetherSection />

				<CareersSection />
			</main>

			<Footer />
		</div>
	);
}
