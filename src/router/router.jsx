import { Route, Routes, Navigate } from "react-router-dom";
import Inscribe from "../pages/inscribe";


function RouterLink() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/inscribe" />} />
                <Route path="/inscribe" element={<Inscribe />} />

            </Routes>
        </>
    );
}

export default RouterLink;
