import "./UserHeader.css";
import TextAtom from '../atoms/TextAtom';
import UserSection from '../molecules/UserSection';
import { useAuth } from "../../context/AuthContext";

const UserHeader = () => {

    const { userName } = useAuth();

    return (
        <div className="user-header">
            <TextAtom text={`Welcome, ${userName}`}/>
            <UserSection />
        </div>
    );
};

export default UserHeader;