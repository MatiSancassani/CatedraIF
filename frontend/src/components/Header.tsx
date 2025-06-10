import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { Student, Teacher } from "../types/students"
const Header = () => {
    const [loggedInStudent, setLoggedInStudent] = useState<Student | null>(null);
    const [loggedInTeacher, setLoggedInTeacher] = useState<Teacher | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedStudent = localStorage.getItem('loggedInStudent');
            const storedTeacher = localStorage.getItem('loggedInTeacher');
            if (storedStudent) {
                const parsedStudent: Student = JSON.parse(storedStudent);
                setLoggedInStudent(parsedStudent);
            }
            if (storedTeacher) {
                const parsedTeacher: Teacher = JSON.parse(storedTeacher);
                setLoggedInTeacher(parsedTeacher);
            }
        } catch (error) {
            console.error("Error al parsear los datos del estudiante en localStorage:", error);
            localStorage.removeItem('loggedInStudent');
            localStorage.removeItem('loggedInTeacher');
            setLoggedInStudent(null);
            setLoggedInTeacher(null);
        }
    }, []);
    useEffect(() => {
    }, [loggedInStudent]);
    const handleLogout = () => {
        localStorage.clear();
        setLoggedInStudent(null);
        navigate('/');
    };
    return (
        <>
            <div>
                <div className="relative bg-[#051f20] flex items-center justify-center w-full">
                    <div className="text-[#DAF1DE] flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-10 p-4 w-full max-w-[1400px]">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center order-1 md:order-none w-full md:w-auto">Catedra Informatica</h1>

                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 order-2 md:order-none mt-4 md:mt-0">
                            <img
                                className="hidden md:block w-48 h-auto max-w-full sm:w-56 md:w-64 lg:w-80 xl:w-96 object-contain"
                                src="resource/LogoEducacion.png"
                                alt="Logo Educación"
                            />

                            <div className="flex flex-col items-center justify-center text-center">
                                {loggedInTeacher ? (
                                    <p className="text-sm md:text-base whitespace-nowrap">Bienvenido profe {loggedInTeacher?.name}!</p>
                                ) : <p className="text-sm md:text-base whitespace-nowrap">Bienvenido alumno {loggedInStudent?.name}!</p>}

                                <button onClick={handleLogout} className="hover:text-[#235347] text-sm md:text-base mt-2">Cerrar Sesion</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    {loggedInStudent?.role === 'student' && (
                        <ul className="">
                            <li className="bg-[#DAF1DE] h-[3rem] flex items-center justify-center gap-5">
                                <Link to="/informatica" className="hover:bg-[#235347] hover:text-[#DAF1DE] p-[.5rem] h-full flex items-center" >Inicio</Link>
                                <Link to="/apuntes" className="hover:bg-[#235347] hover:text-[#DAF1DE] p-[.5rem] h-full flex items-center" >Apuntes</Link>
                                <Link to="/calificaciones" className="hover:bg-[#235347] hover:text-[#DAF1DE] p-[.5rem] h-full flex items-center" >Calificaciones</Link>
                                <a className="hover:bg-[#235347] hover:text-[#DAF1DE] p-[.5rem] h-full flex items-center" href="https://biblioteca.unsj.edu.ar/" target="_blank" rel="noopener noreferrer">Biblioteca</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header