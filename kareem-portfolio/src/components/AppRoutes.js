import React from 'react';
import {Route, Routes} from "react-router";
import PortfolioDashboard from "./PortfolioDashboard";
import ProjectDashboard from "./ProjectDashboard";
import ProjectViewWrapper from "./ProjectViewWrapper";

export function AppRoutes() {
    return (
        <div className='app-container'>
            <Routes>
                <Route path="/" element={<PortfolioDashboard/>}/>
                <Route exact path="projects" element={<ProjectDashboard/>}/>
                <Route exact path="project/:projectId" element={<ProjectViewWrapper/>}/>
            </Routes>
        </div>
    );
}
