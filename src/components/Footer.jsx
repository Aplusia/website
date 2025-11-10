import logo from "../assets/logo.svg";

export default function Footer() {
	return (
		<footer className="bg-black text-white relative z-20">
			<div className="max-w-[1600px] mx-auto px-[20px] py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Company Info */}
					<div>
						<img
							src={logo}
							alt="Logo"
							className="h-16 mb-4 brightness-0 invert"
						/>
						<p className="text-gray-400 text-sm leading-relaxed">
							AI-powered data platforms for the next generation of drug
							discovery.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white mb-4">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="/#what-we-do"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									What we do
								</a>
							</li>
							<li>
								<a
									href="/#team"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Team
								</a>
							</li>
							<li>
								<a
									href="/#case-studies"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Case studies
								</a>
							</li>
							<li>
								<a
									href="/#careers"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Careers
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-white mb-4">Contact</h4>
						<ul className="space-y-3">
							<li className="text-gray-400 text-sm">info@company.com</li>
							<li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
							<li className="text-gray-400 text-sm">
								123 Innovation Drive
								<br />
								San Francisco, CA 94105
							</li>
						</ul>
					</div>

					{/* Social */}
					<div>
						<h4 className="text-white mb-4">Follow Us</h4>
						<div className="flex gap-4">
							<a
								href="https://linkedin.com"
								className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
								aria-label="LinkedIn"
							>
								<span className="text-sm">Li</span>
							</a>
							<a
								href="https://twitter.com"
								className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
								aria-label="Twitter"
							>
								<span className="text-sm">Tw</span>
							</a>
							<a
								href="https://github.com"
								className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#75bb2b] transition-colors"
								aria-label="GitHub"
							>
								<span className="text-sm">Gh</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-400 text-sm">
						© {new Date().getFullYear()} Aplusia. All rights reserved.
					</p>
					<div className="flex gap-6">
						<a
							href="/privacy"
							className="text-gray-400 hover:text-white transition-colors text-sm"
						>
							Privacy Policy
						</a>
						<a
							href="/terms"
							className="text-gray-400 hover:text-white transition-colors text-sm"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
