    import { Navigate, Route, Routes } from "react-router-dom" 
    import WelcomePage from "../components/pages/welcomePageComponents/WelcomePage"
    import MessagePage from "../components/pages/messagePageComponents/MessagePage"

    export const AppRoutes = () => {
        return (
            <Routes>
                <Route path="/welcomePage" element={<WelcomePage />} />
                <Route path="/leaveMessagePage" element={<MessagePage />} />
                
                <Route path="*" element={<Navigate to="/welcomePage" replace />} />
            </Routes>
        )
    }