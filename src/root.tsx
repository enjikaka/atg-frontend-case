import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./state/store";

import { Main } from "src/components/Main/Main";

import "./app.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</StrictMode>,
);
