import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import MentorPage from "./pages/MentorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/program" Component={ProgramPage} />
        <Route path="/mentor" Component={MentorPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
