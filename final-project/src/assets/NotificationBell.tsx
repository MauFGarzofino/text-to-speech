import "./styles/NotificationBell.css"

const NotificationBell= ({ src }: { src: string }) => {
    return <img src={src} alt="Bell Image" className="bell-image" />;
};

export default NotificationBell;