import { Navigate, Route, Routes } from "react-router-dom"
import MessagePage from "../components/MessagePage"
import WelcomePage from "../components/welcomePageComponents/WelcomePage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/welcomePage" element={<WelcomePage />} />
            <Route path="/leaveMessagePage" element={<MessagePage />} />
            
            <Route path="*" element={<Navigate to="/welcomePage" replace />} />
        </Routes>
    )
}