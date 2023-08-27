import React from 'react';
import {Route, Routes} from "react-router";
import PortfolioDashboard from "./PortfolioDashboard";
import ProjectDashboard from "./ProjectDashboard";
export function AppRoutes() {
    return (
        <div className='app-container'>
            <Routes>
                <Route path="/" element={<PortfolioDashboard/>}/>
                <Route exact path="projects" element={<ProjectDashboard/>}/>
            </Routes>
        </div>
    );
}
