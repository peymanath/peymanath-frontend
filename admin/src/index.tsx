import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AllRoute from "./pages/Route";
import { HeaderProvider } from "./context/HeaderProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<BrowserRouter>
		<HeaderProvider>
			<AllRoute />
			<App />
		</HeaderProvider>
	</BrowserRouter>,
);
