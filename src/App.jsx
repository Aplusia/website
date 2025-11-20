import HomePage from "./components/HomePage";
import MaintenancePage from "./components/MaintenancePage";

export default function App() {
	const isProduction = import.meta.env.VITE_PRODUCTION === "TRUE";

	if (isProduction) {
		return <MaintenancePage />;
	}

	return <HomePage />;
}
