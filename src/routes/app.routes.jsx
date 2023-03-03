import {Routes, Route} from "react-router-dom"
	
import { StartDashboard } from "../pages/StartDashboard"
import { VehiclesDashboard } from "../pages/VehiclesDashboard"
import { Locations } from "../pages/Locations"
import { CarLocation } from "../pages/CarLocation"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<StartDashboard />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/carLocation/:id" element={<CarLocation />} />
            <Route path="/vehiclesDashboard" element={<VehiclesDashboard />} />
        </Routes>
    )
}