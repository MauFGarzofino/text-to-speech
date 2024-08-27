import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import SongsTemplate from "../template/SongsTemplate";

const SongsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);

  return <SongsTemplate />;
};

export default SongsPage;