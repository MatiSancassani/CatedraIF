// src/hooks/useLogin.ts
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export const useLogin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const navigate = useNavigate();

    const handleSignUpClick = () => setIsSignUpMode(true);
    const handleSignInClick = () => setIsSignUpMode(false);

    const handleSubmitStudent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://catedraif.onrender.com/api/auth/login', {
                name,
                email,
            });
            localStorage.setItem('loggedInStudent', JSON.stringify(response.data.student));
            navigate('/informatica');
        } catch (err) {
            const msg = axios.isAxiosError(err) && err.response?.data?.message
                ? err.response.data.message
                : 'Error al conectar con el servidor o credenciales inválidas.';
            alert(msg);
        }
    };

    const handleSubmitTeacher = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://catedraif.onrender.com/api/teacher/login", {
                email,
                password,
            });
            localStorage.setItem('loggedInTeacher', JSON.stringify(data.teacher));
            navigate("/home");
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            const msg = err.response?.data?.message || "Login failed";
            alert(msg);
        }
    };

    return {
        name,
        email,
        password,
        isSignUpMode,
        setName,
        setEmail,
        setPassword,
        handleSignUpClick,
        handleSignInClick,
        handleSubmitStudent,
        handleSubmitTeacher,
    };
};
