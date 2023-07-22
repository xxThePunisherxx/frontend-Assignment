import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";
import { ThemeState } from "./CLientSide/context/ThemeState.jsx";

import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* <App /> */}
			<BrowserRouter>
				<ScrollToTop />
				<ThemeState>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</ThemeState>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	</React.StrictMode>
);
