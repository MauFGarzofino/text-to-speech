import React from 'react';
import "./NotificationBell.css"

const NotificationBell: React.FC<{ src: string }> = ({ src }) => {
    return <img src={src} alt="Bell Image" className="bell-image" />;
};

export default NotificationBell;