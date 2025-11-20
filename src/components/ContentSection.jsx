export default function ContentSection({
	title,
	description,
	imagePosition = "right",
	children,
}) {
	return (
		<section className="mt-32 flex flex-col md:flex-row gap-10 items-center">
			{imagePosition === "left" && (
				<div className="flex-1 bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center overflow-hidden">
					{children || (
						<span className="text-gray-400 text-xl">Placeholder</span>
					)}
				</div>
			)}
			<div className="flex-1">
				<h3 className="text-4xl text-[#1f2937] mb-4">{title}</h3>
				<div className="text-lg text-[#6b7280] leading-relaxed">
					{description}
				</div>
			</div>
			{imagePosition === "right" && (
				<div className="flex-1 rounded-2xl h-[600px] flex items-center justify-center overflow-hidden">
					{children || (
						<span className="text-gray-400 text-xl">Placeholder</span>
					)}
				</div>
			)}
		</section>
	);
}
