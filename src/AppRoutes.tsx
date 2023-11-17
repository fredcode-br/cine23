import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Title from "./pages/Title";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route path="/home" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path="/:type/:id" element={<Title />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;