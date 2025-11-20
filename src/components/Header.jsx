import { useState } from "react";
import logo from "../assets/logo.svg";
import ContactModal from "./ContactModal";

export default function Header({ isMobile }) {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	return (
		<>
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
					<button
						type="button"
						onClick={() => setIsContactModalOpen(true)}
						className={`text-white bg-black no-underline ${isMobile ? "text-xs px-3 py-1" : "text-sm px-4 py-1"} rounded-full cursor-pointer hover:bg-[#1f2937] border-0`}
						style={{ transition: "background-color 0.2s ease" }}
					>
						get in contact
					</button>
				</nav>
			</header>
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</>
	);
}
