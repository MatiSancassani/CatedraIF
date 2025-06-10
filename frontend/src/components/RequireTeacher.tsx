import { Navigate } from 'react-router-dom';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const RequireTeacher: React.FC<Props> = ({ children }) => {
    const teacher = JSON.parse(localStorage.getItem('loggedInTeacher') || 'null');

    if (!teacher) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default RequireTeacher;