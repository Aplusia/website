import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function ImpressumPage() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

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
					background: isMobile
						? "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
						: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)",
				}}
			/>

			{/* Main content container */}
			<main className="max-w-[1600px] mx-auto relative z-20 px-[20px]">
				<Header isMobile={isMobile} />

				<div className="py-24">
					<h1 className="text-4xl font-bold mb-12">Impressum</h1>

					<div className="space-y-8 text-gray-800">
						{/* Company Information */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Angaben gemäß § 5 TMG
							</h2>
							<p className="mb-2">
								<strong>Aplusia GmbH</strong>
							</p>
							<p className="mb-2">Türkenstraße 5</p>
							<p className="mb-2">80333 München, Germany</p>
						</section>

						{/* Registration Details */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Handelsregister</h2>
							<p className="mb-2">
								<strong>Registergericht:</strong> Amtsgericht München
							</p>
							<p className="mb-2">
								<strong>Registernummer:</strong> HRB 301918
							</p>
						</section>

						{/* Management / Legal Representatives */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Vertreten durch / Geschäftsführung
							</h2>
							<p className="mb-2">Dr. Christoph Wichmann</p>
							<p className="mb-2">Georg Wallmann</p>
						</section>

						{/* Contact Information */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
							<p className="mb-2">
								<strong>E-Mail:</strong> info@aplusia.com
							</p>
						</section>

						{/* Tax Information */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
							<p className="mb-2">
								Umsatzsteuer-Identifikationsnummer gemäß § 27 a
								Umsatzsteuergesetz:
							</p>
							<p className="mb-2">
								<strong>USt-IdNr.:</strong> DE454815293
							</p>
							<p className="mb-2">
								<strong>Steuernummer:</strong> 143/114/50876
							</p>
						</section>

						{/* Responsible for Content */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
							</h2>
							<p className="mb-2">Georg Wallmann</p>
							<p className="mb-2">Türkenstraße 5</p>
							<p className="mb-2">80333 München, Germany</p>
						</section>

						{/* EU Dispute Resolution */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								EU-Streitschlichtung
							</h2>
							<p className="mb-4">
								Die Europäische Kommission stellt eine Plattform zur
								Online-Streitbeilegung (OS) bereit:
							</p>
							<p className="mb-4">
								<a
									href="https://ec.europa.eu/consumers/odr"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#75bb2b] hover:underline"
								>
									https://ec.europa.eu/consumers/odr
								</a>
							</p>
							<p className="mb-2">
								Unsere E-Mail-Adresse finden Sie oben im Impressum.
							</p>
						</section>

						{/* Consumer Dispute Resolution */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Verbraucherstreitbeilegung / Universalschlichtungsstelle
							</h2>
							<p className="mb-2">
								Wir sind nicht bereit oder verpflichtet, an
								Streitbeilegungsverfahren vor einer
								Verbraucherschlichtungsstelle teilzunehmen.
							</p>
						</section>

						{/* Liability for Content */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Haftung für Inhalte
							</h2>
							<p className="mb-4">
								Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
								Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
								verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
								Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
								gespeicherte fremde Informationen zu überwachen oder nach
								Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
								hinweisen.
							</p>
							<p className="mb-4">
								Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
								Informationen nach den allgemeinen Gesetzen bleiben hiervon
								unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
								Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
								Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
								wir diese Inhalte umgehend entfernen.
							</p>
						</section>

						{/* Liability for Links */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
							<p className="mb-4">
								Unser Angebot enthält Links zu externen Websites Dritter, auf
								deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
								diese fremden Inhalte auch keine Gewähr übernehmen. Für die
								Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
								oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
								wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
								überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
								Verlinkung nicht erkennbar.
							</p>
							<p className="mb-4">
								Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
								jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
								zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
								derartige Links umgehend entfernen.
							</p>
						</section>

						{/* Copyright */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
							<p className="mb-4">
								Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
								diesen Seiten unterliegen dem deutschen Urheberrecht. Die
								Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
								Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
								schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
								Downloads und Kopien dieser Seite sind nur für den privaten,
								nicht kommerziellen Gebrauch gestattet.
							</p>
							<p className="mb-4">
								Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
								wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
								werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
								trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
								bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
								von Rechtsverletzungen werden wir derartige Inhalte umgehend
								entfernen.
							</p>
						</section>

						{/* Applicable Law */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">Anwendbares Recht</h2>
							<p className="mb-2">
								Es gilt das Recht der Bundesrepublik Deutschland.
							</p>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
