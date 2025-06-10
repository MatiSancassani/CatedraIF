import { useLogin } from "../hooks/useLogin";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const {
        name,
        email,
        password,
        isSignUpMode,
        setName,
        setEmail,
        setPassword,
        handleSignInClick,
        handleSignUpClick,
        handleSubmitStudent,
        handleSubmitTeacher,
    } = useLogin();

    return <LoginForm
        name={name}
        email={email}
        password={password}
        isSignUpMode={isSignUpMode}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignInClick={handleSignInClick}
        handleSignUpClick={handleSignUpClick}
        handleSubmitStudent={handleSubmitStudent}
        handleSubmitTeacher={handleSubmitTeacher}
    />;
};

export default Login;
