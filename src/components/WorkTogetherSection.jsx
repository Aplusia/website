import { useState } from "react";
import workingTogetherBg from "../assets/pexels-diva-30335060_optimized.jpg";
import ContactModal from "./ContactModal";

export default function WorkTogetherSection() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	return (
		<>
			<section className="mt-32 overflow-hidden rounded-3xl relative">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url(${workingTogetherBg})`,
						opacity: 0.1,
					}}
				/>
				<div className="relative py-16 px-8 md:px-16 lg:px-24 flex flex-col items-center gap-8">
					<h2
						className="text-[60px] md:text-[90px] lg:text-[120px] text-center italic relative z-10 pb-4 max-w-full"
						style={{
							letterSpacing: "-0.02em",
							fontWeight: 100,
							lineHeight: 0.9,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundImage: `url(${workingTogetherBg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundAttachment: "fixed",
						}}
					>
						Interested in
						<br />
						working together?{" "}
					</h2>
					<button
						type="button"
						onClick={() => setIsContactModalOpen(true)}
						className="text-white no-underline px-6 py-3 rounded-full cursor-pointer transition-all duration-200 z-10 relative flex items-center gap-2 border-0"
						style={{
							backgroundImage: `url(${workingTogetherBg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundAttachment: "fixed",
							fontWeight: 700,
						}}
					>
						Get in Contact
						<span>→</span>
					</button>
				</div>
			</section>
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</>
	);
}
