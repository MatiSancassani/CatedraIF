import React from "react";

type Props = {
    name: string;
    email: string;
    password: string;
    isSignUpMode: boolean;
    setName: (v: string) => void;
    setEmail: (v: string) => void;
    setPassword: (v: string) => void;
    handleSignInClick: () => void;
    handleSignUpClick: () => void;
    handleSubmitStudent: (e: React.FormEvent<HTMLFormElement>) => void;
    handleSubmitTeacher: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginForm: React.FC<Props> = ({
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
}) => {
    return (
        <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
            <div className="forms-container">
                <div
                    className={`signin-signup absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 grid grid-cols-1 transition-all duration-[1000ms] delay-[700ms] ease-in-out z-50 ${isSignUpMode ? "left-[25%]" : "left-[75%]"}`}
                >
                    <form onSubmit={handleSubmitTeacher} className={`sign-in-form flex flex-col items-center justify-center px-20 transition-all duration-200 delay-700 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 ${isSignUpMode ? "opacity-0 z-10" : "z-20"}`}>
                        <h2 className="text-[2.2rem] text-[#DAF1DE] mb-[10px]">Ingresar como profesor</h2>
                        <div className="flex items-center gap-2 max-w-[380px] w-[100%] bg-[#f0f0f0] mb-[1.2rem] m-y-[10px] h-[55px] rounded-full py-0 px-[0.4rem] relative">
                            <i className="m-[1rem] flex items-center justify-center text-[#acacac] leading-[55px] transition-[0.5s] text-[1.1rem] fas fa-envelope"></i>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[100%] bg-none outline-none border-none leading-[1] text-[1.1rem] font-medium text-[#333] placeholder:text-[#aaa] placeholder:font-medium" />
                        </div>
                        <div className="flex items-center gap-2 max-w-[380px] w-full bg-[#f0f0f0] mb-[1rem] m-y-10 h-[55px] rounded-full px-1 relative">
                            <i className="m-[1rem] flex items-center justify-center text-[#acacac] leading-[55px] transition-[0.5s] text-[1.1rem] fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[100%] bg-none outline-none border-none leading-[1] text-[1.1rem] font-medium text-[#333] placeholder:text-[#aaa] placeholder:font-medium" />
                        </div>
                        <input type="submit" value="Entrar profe" className="w-[150px] bg-[#DAF1DE] border-none outline-none h-[49px] rounded-full text-[#000] uppercase font-semibold my-[10px] mx-0 cursor-pointer transition duration-500 hover:bg-[#235347] hover:text-[#DAF1DE]" />
                    </form>

                    <form onSubmit={handleSubmitStudent} className={`sign-up-form flex flex-col items-center justify-center px-20 transition-all duration-200 delay-700 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 ${isSignUpMode ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                        <h2 className="text-[2.2rem] text-[#DAF1DE] mb-[10px]">Ingresar como alumno</h2>
                        <div className="flex items-center gap-2 max-w-[380px] w-full bg-[#f0f0f0] mb-[1.2rem] m-y-10 h-[55px] rounded-full px-1 relative">
                            <i className="m-[1rem] flex items-center justify-center text-[#acacac] leading-[55px] transition-[0.5s] text-[1.1rem] fas fa-user"></i>
                            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required className="w-[100%] bg-none outline-none border-none leading-[1] text-[1.1rem] font-medium text-[#333] placeholder:text-[#aaa] placeholder:font-medium" />
                        </div>
                        <div className="flex items-center gap-2 max-w-[380px] w-full bg-[#f0f0f0] mb-[1rem] m-y-10 h-[55px] rounded-full px-1 relative">
                            <i className="m-[1rem] flex items-center justify-center text-[#acacac] leading-[55px] transition-[0.5s] text-[1.1rem] fas fa-envelope"></i>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-[100%] bg-none outline-none border-none leading-[1] text-[1.1rem] font-medium text-[#333] placeholder:text-[#aaa] placeholder:font-medium" />
                        </div>
                        <input type="submit" className="w-[150px] bg-[#DAF1DE] border-none outline-none h-[49px] rounded-full text-[#000] uppercase font-semibold my-[10px] mx-0 cursor-pointer transition duration-500 hover:bg-[#235347] hover:text-[#DAF1DE]" value="Entrar" />
                    </form>
                </div>
            </div>

            <div className="panels-container absolute inset-0 h-full w-full grid grid-cols-2">
                <div className={`panel left-panel flex flex-col items-end justify-around text-center z-10 pt-[3rem] pr-[17%] pb-[2rem] pl-[12%] ${isSignUpMode ? "pointer-events-none" : "pointer-events-auto"}`}>
                    <div className={`content text-white transition-transform ease-in-out duration-[900ms] delay-[600ms] ${isSignUpMode ? "translate-x-[-800px]" : ""}`}>
                        <h3 className="text-[#051F20] font-semibold leading-[1] text-[1.5rem]">Eres alumno?</h3>
                        <p className="text-[#051F20] text-[0.95rem] py-[0.7rem] px-0">
                            Ingresa para acceder a tus materias, consultar actividades, descargar apuntes y entregar trabajos prácticos.
                        </p>
                        <button className="btn transparent m-0 bg-[#051F20] text-[#FFF] border-2 border-white w-[200px] h-[50px] font-semibold text-[0.8rem] rounded-full cursor-pointer transition duration-500 hover:bg-[#C0CFB2] hover:text-[#051F20]" onClick={handleSignUpClick}>
                            Ingresar como alumno
                        </button>
                    </div>
                    <img src="resource/estudiante.png" className={`image w-[85%] transition-transform ease-in-out duration-[1100ms] delay-[400ms] ${isSignUpMode ? "translate-x-[-800px]" : ""}`} alt="estudiante" />
                </div>

                <div className={`panel right-panel flex flex-col items-end justify-around text-center z-10 pt-[3rem] pr-[12%] pb-[2rem] pl-[17%] ${isSignUpMode ? "pointer-events-all" : "pointer-events-none"}`}>
                    <div className={`content text-white transition-transform ease-in-out duration-[900ms] delay-[600ms] ${isSignUpMode ? "translate-x-[0%]" : "translate-x-[800px]"}`}>
                        <h3 className="text-[#051F20] font-semibold leading-[1] text-[1.5rem]">Eres profesor?</h3>
                        <p className="text-[#051F20] text-[0.95rem] py-[0.7rem] px-0">
                            Accede a tu panel para gestionar clases, subir materiales, calificar tareas y comunicarte con tus alumnos.
                        </p>
                        <button className="btn transparent m-0 bg-[#051F20] text-[#FFF] border-2 border-white w-[200px] h-[50px] font-semibold text-[0.8rem] rounded-full cursor-pointer transition duration-500 hover:bg-[#C0CFB2] hover:text-[#051F20]" onClick={handleSignInClick}>
                            Iniciar como profesor
                        </button>
                    </div>
                    <img src="resource/profesor.png" className={`image w-[85%] transition-transform ease-in-out duration-[1100ms] delay-[400ms] ${isSignUpMode ? "translate-x-[0%]" : "translate-x-[800px]"}`} alt="profesor" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
