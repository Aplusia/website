import heroBg from "../assets/pexels-mucahttbeyhan-16313978_optimized.jpg";

export default function HeroSection() {
	return (
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
					Computational Platforms for the next
					<br />
					generation of Drug Discovery
				</p>
			</div>
		</section>
	);
}
