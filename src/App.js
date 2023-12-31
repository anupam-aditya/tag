import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SideNav from "./pages/global/sidebar/SideNav";
import Dashboard from "./pages/dashboard/Dashboard";
import AdAnalysis from "./pages/adAnalysis/AdAnalysis";
import GeneratedAds from "./pages/generatedAds/GeneratedAds";
import AdEdit from "./pages/adEdit/AdEdit";
import AdReview from "./pages/adReview/AdReview";
import Publish from "./pages/publish/Publish";
import AdStructure from "./pages/adStructure/AdStructure";
import Integrations from "./pages/integrations/Integrations";
import Settings from "./pages/global/settings/Settings";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidenavProvider } from "./pages/global/sidebar/sidenavContext";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Register from "./pages/register/Register";
import { useAuth } from "./store/AuthContext";

function App() {
	const { user, userLogin, userLogout, userRegister } = useAuth();
	// console.log(user);
	return (
		<div className="App" style={{ display: "flex" }}>
			<BrowserRouter>
				{user && <SideNav logout={userLogout} />}
				<Routes>
					{user ? (
						<>
							<Route path="/ad_analysis" element={<AdAnalysis />} />
							<Route path="/generated_ads" element={<GeneratedAds />} />
							<Route path="/ad_edit" element={<AdEdit />} />
							<Route path="/ad_review" element={<AdReview />} />
							<Route path="/publish" element={<Publish />} />
							<Route path="/ad_structure" element={<AdStructure />} />
							<Route path="/integrations" element={<Integrations />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/" element={<Dashboard />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
						</>
					) : (
						<>
							<Route path="/" element={<Login login={userLogin} />} />
							<Route
								path="/register"
								element={<Register register={userRegister} />}
							/>
						</>
					)}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
