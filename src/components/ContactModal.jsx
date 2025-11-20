import MailCopy from "./MailCopy";

export default function ContactModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		// biome-ignore lint/a11y/useSemanticElements: backdrop div needs click handler for modal UX
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm"
			style={{ backgroundColor: "color(srgb 1 1 1 / 0.35)" }}
			onClick={onClose}
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			role="button"
			tabIndex={0}
		>
			<div
				className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl z-[101]"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
			>
				{/* Close button */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
					aria-label="Close"
				>
					×
				</button>

				<h2 className="text-4xl font-bold text-[#1f2937] mb-8">
					Get in Contact
				</h2>

				<div className="space-y-8">
					{/* Georg Wallmann */}
					<div className="border-b border-gray-200 pb-6">
						<h3 className="text-2xl font-semibold text-[#1f2937] mb-2">
							Georg Wallmann
						</h3>
						<p className="text-base text-[#6b7280] mb-4">Managing Partner</p>
						<MailCopy user="georg" domain="aplusia.com" />
					</div>

					{/* General Contact */}
					<div>
						<h3 className="text-2xl font-semibold text-[#1f2937] mb-4">
							General Inquiries
						</h3>
						<MailCopy user="info" domain="aplusia.com" />
					</div>
				</div>
			</div>
		</div>
	);
}
