const OPEN_ROLES = [
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
];

export default function CareersSection() {
	return (
		<section id="careers" className="mt-32 mb-20 bg-gray-50 rounded-3xl p-12">
			<div className="flex flex-col md:flex-row gap-8">
				<h2 className="text-5xl text-[#1f2937] md:w-1/3 flex-shrink-0">
					OPEN ROLES
				</h2>
				<div className="space-y-0 md:w-2/3">
					{OPEN_ROLES.map((job) => (
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
	);
}
