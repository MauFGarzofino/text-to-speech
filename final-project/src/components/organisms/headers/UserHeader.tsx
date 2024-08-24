import "./styles/UserHeader.css";
import TextAtom from '../../atoms/typography/Text';
import UserSection from '../../molecules/user/UserSection';
import { useAuth } from "../../../context/AuthContext";

const getFirstName = (fullName: string | null): string => {
    return fullName ? fullName.split(' ')[0] : '';
};

const UserHeader = () => {

    const { userName } = useAuth();
    const firstName = getFirstName(userName); 

    return (
        <div className="user-header">
            <TextAtom fontSize="1rem" text={`Welcome, ${firstName}`}/>
            <UserSection />
        </div>
    );
};

export default UserHeader;
