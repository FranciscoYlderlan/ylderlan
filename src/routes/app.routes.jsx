import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Contact } from "../pages/Contact";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
}