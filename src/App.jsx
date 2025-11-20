import HomePage from "./components/HomePage";
import MaintenancePage from "./components/MaintenancePage";

console.log("[BUILD TIME] VITE_DEV =", import.meta.env.VITE_DEV);
console.log("[BUILD TIME] All env vars:", import.meta.env);

export default function App() {
	const isDev = import.meta.env.VITE_DEV === "TRUE";

	console.log("[RUNTIME] VITE_DEV env variable:", import.meta.env.VITE_DEV);
	console.log("[RUNTIME] Dev mode enabled:", isDev);
	console.log("[RUNTIME] typeof:", typeof import.meta.env.VITE_DEV);

	if (isDev) {
		return <HomePage />;
	}

	return <MaintenancePage />;
}
