import HomePage from "./components/HomePage";
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

	return <HomePage />;
}
