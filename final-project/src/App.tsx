import "./app.css";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./routers/Router";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
  );
};

export default App;
