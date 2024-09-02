import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ViewAllAlbumTemplate from "../template/ViewAllAlbumTemplate";

const ViewAllAlbums = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <ViewAllAlbumTemplate />
    </div>
  );
};

export default ViewAllAlbums;
