import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
// In the App component, import the json datasets from the files src/companies.json and src/technologies.json and save them in the state as separate state variables.

import companies from "./companies.json";
import technologies from "./technologies.json";

function App() {
    return (
        <>
            <Navbar />
            {/* Pass the companies prop to HomePage */}
            <Routes>
                {/* Pass the companies prop to HomePage */}
                <Route path="/" element={<HomePage companies={companies} />} />

                {/* Route for the CompanyPage component */}
                <Route path="/company/:companySlug" element={<CompanyPage />} />

                {/* Route for the TechnologyPage component */}
                <Route path="/tech/:slug" element={<TechnologyPage />} />
            </Routes>
        </>
    );
}

export default App;
