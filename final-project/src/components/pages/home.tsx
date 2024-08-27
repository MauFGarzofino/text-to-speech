import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import HomePageTemplate from "../template/HomePageTemplate";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);

  return <HomePageTemplate />;
};

export default HomePage;