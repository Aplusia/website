import { useNavigate, useParams } from "react-router-dom";
import christophPhoto from "../assets/christoph_crop_optimized.jpg";
import constiPhoto from "../assets/constantin_crop_optimized.jpg";
import georgPhoto from "../assets/georg_crop_optimized.jpg";
import juanPhoto from "../assets/juan_crop_optimized.jpg";
import patriciaPhoto from "../assets/patricia_crop_optimized.jpg";

const TEAM_MEMBERS = {
	"christoph-wichmann": {
		name: "Christoph Wichmann, PhD",
		role: "Managing Partner | Co-Founder",
		bio: "PhD in Computational Biology with 15 years experience in drug discovery platforms.",
		image: christophPhoto,
	},
	"georg-wallmann": {
		name: "Georg Wallmann",
		role: "Managing Partner | Co-Founder",
		bio: "Former Tech Lead at major pharmaceutical company, specializing in AI/ML systems.",
		image: georgPhoto,
	},
	"juan-restrepo-lopez": {
		name: "Juan Restrepo Lopez, PhD",
		role: "Consultant",
		bio: "Full-stack developer with expertise in scalable data platforms and cloud architecture.",
		image: juanPhoto,
	},
	"patricia-skowronek": {
		name: "Patricia Skowronek, PhD",
		role: "Consultant",
		bio: "Molecular biologist focused on target identification and validation workflows.",
		image: patriciaPhoto,
	},
	"constantin-ammar": {
		name: "Constantin Ammar, PhD",
		role: "Consultant in Residence",
		bio: "10+ years driving product strategy in life sciences technology companies.",
		image: constiPhoto,
	},
};

export default function TeamMemberPage() {
	const { slug } = useParams();
	const _navigate = useNavigate();
	const member = TEAM_MEMBERS[slug];

	if (!member) {
		return <div>Member not found</div>;
	}

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
					background:
						"linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)",
				}}
			/>

			{/* Main content */}
			<main className="max-w-[1600px] mx-auto relative z-20 px-[20px] py-20">
				{/* Back button */}
				<button
					type="button"
					onClick={() => {
						sessionStorage.setItem("instantScrollToTeam", "true");
						window.location.href = "/#team";
					}}
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
								src={member.image}
								alt={member.name}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="flex-1">
						<h1 className="text-5xl text-[#1f2937] mb-4">{member.name}</h1>
						<p className="text-2xl text-[#75bb2b] mb-8">{member.role}</p>
						<p className="text-xl text-[#6b7280] leading-relaxed">
							{member.bio}
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
