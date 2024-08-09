import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/pages/login";
import HomePage from "../components/pages";
import NotFound from "../components/pages/not-found";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
