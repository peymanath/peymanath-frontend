import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AllRoute from "./pages/Route";
import { HeaderProvider } from "./context/HeaderProvider";
import { LoadingProvider } from "./context/LoadingProvider";
import { GlobalStoreProvider } from "./context/GlobalStoreProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<BrowserRouter>
		<GlobalStoreProvider>
			<LoadingProvider>
				<HeaderProvider>
					<AllRoute />
					<App />
				</HeaderProvider>
			</LoadingProvider>
		</GlobalStoreProvider>
	</BrowserRouter>,
);
