import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/pages/login";
import Lyrics from "../components/pages/lyrics";
import NotFound from "../components/pages/not-found";
import HomePage from "../components/pages/home";
import SongsPage from "../components/pages/songs";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/lyrics" element={<Lyrics />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/songs" element={<SongsPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;