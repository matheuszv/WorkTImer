import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Index"
import { History } from "../pages/History"
import { LayoutDefault } from "../layouts/default";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<LayoutDefault />}>
                <Route path="/" element={<Home />}/>
                <Route path="/history" element={<History />}/>
            </Route>
        </Routes>
    );
}