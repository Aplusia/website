import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ImpressumPage from "./components/ImpressumPage";
import MaintenancePage from "./components/MaintenancePage";

console.log("[BUILD TIME] VITE_PRODUCTION =", import.meta.env.VITE_PRODUCTION);
console.log("[BUILD TIME] All env vars:", import.meta.env);

export default function App() {
	const isProduction = import.meta.env.VITE_PRODUCTION === "TRUE";

	console.log(
		"[RUNTIME] VITE_PRODUCTION env variable:",
		import.meta.env.VITE_PRODUCTION,
	);
	console.log("[RUNTIME] Production mode enabled:", isProduction);
	console.log("[RUNTIME] typeof:", typeof import.meta.env.VITE_PRODUCTION);

	if (isProduction) {
		return <MaintenancePage />;
	}

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/impressum" element={<ImpressumPage />} />
		</Routes>
	);
}
