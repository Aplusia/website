import { useEffect, useRef, useState } from "react";

export default function MailCopy({ user, domain, className = "" }) {
	const [copied, setCopied] = useState(false);
	const emailRef = useRef(null);
	const email = `${user}@${domain}`;

	useEffect(() => {
		if (emailRef.current) {
			emailRef.current.textContent = email;
		}
	}, [email]);

	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div>
			<button
				type="button"
				onClick={handleCopy}
				className={`flex items-center gap-2 text-[#6b7280] hover:text-[#75bb2b] transition-colors duration-200 cursor-pointer ${className}`}
				data-user={user}
				data-domain={domain}
			>
				<span ref={emailRef}></span>
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Copy to clipboard</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
					/>
				</svg>
			</button>
			<p className="text-xs text-black mt-2 h-4">
				{copied ? "✓ Email copied!" : ""}
			</p>
		</div>
	);
}
