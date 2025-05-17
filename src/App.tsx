import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import PageNotFound from "./pages/page-not-found/PageNotFound";

function App() {
	return <BrowserRouter>
	<Routes>
		<Route path="/" element={<Landing />} />
		<Route path="about" element={<About />} />
		<Route path="*" element={<PageNotFound />} />
	</Routes>
	</BrowserRouter>;
}

export default App;
