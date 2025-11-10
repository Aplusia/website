import { useState } from "react";
import teamPhoto from "../assets/7206_watermark_01.jpg";

const TEAM_MEMBERS = [
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

export default function TeamSection() {
	const [selectedMember, setSelectedMember] = useState(null);

	return (
		<section id="team" className="mt-32">
			<h2 className="text-5xl text-[#1f2937] mb-16">OUR TEAM</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{TEAM_MEMBERS.map((member, index) => (
					<button
						type="button"
						key={member.name}
						className="flex flex-col group cursor-pointer text-left bg-transparent border-0 p-0 w-full"
						onClick={index < 5 ? () => setSelectedMember(member) : undefined}
						disabled={index >= 5}
					>
						<div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
							<span className="text-gray-400 text-sm">{member.name}</span>
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
				{/* Bio Section - rendered after all grid items */}
				{selectedMember && (
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
			</div>
		</section>
	);
}
