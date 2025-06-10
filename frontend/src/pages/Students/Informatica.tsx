import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
const Informatica = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <div className="flex-grow">
                <Header />
                <div className="flex flex-col items-center mt-[2rem]">
                    <div className="bg-[#f4f4f4] w-[60%] flex flex-col gap-5">
                        <div className="mt-[2rem]">
                            <h2 className="text-center text-[2.5rem] font-bold">Bienvenido a la catedra de Informatica</h2>
                        </div>

                        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5">
                            <h3 className="text-[1.5rem]">Acerca de la Catedra</h3>
                            <p>La asignatura se dicta durante el primer semestre de las Carreras de Ingeniería en: Agrimensura, Minas y Metalurgia Extractiva.</p>
                            <p>La materia se desarrolla durante 15 semanas, y tiene las modalidades de Presencial ó Virtual, y se puede aprobar como Promocional ó Regular.</p>
                            <p>Al aprobar la asignatura se espera que el alumno sea capaz de Conocer y comprender:</p>
                            <ul className="list-disc list-inside">
                                <li>Los conceptos y la terminología relacionados con la Informática.</li>
                                <li>Manejo fluido de software.</li>
                                <li>Las bases de la lógica.</li>
                                <li>la técnica de programación estructurada.</li>
                                <li>un lenguaje de programación científico y programas.</li>
                            </ul>

                            <div className="flex items-center gap-2">
                                <img className="w-[5rem] rounded-full" src="resource/profe.jfif" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-bold">Sancassani Matias - Desarrollador FullStack - Profesor TITULAR</p>
                                    <p className="uppercase">Responsable Catedra</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center gap-2 bg-[#bebebec5]">
                                <img className="w-[1.5rem]" src="resource/aviso.png" alt="" />
                                <p className="text-[1.3rem] font-mono">Avisos</p>
                            </div>
                            <p className="p-5">Aun el profesor de la catedra no ha publicado avisos.</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 bg-[#bebebec5]">
                                <img className="w-[1.5rem]" src="resource/mensaje.png" alt="" />
                                <p className="text-[1.3rem] font-mono">Mensajes</p>
                            </div>
                            <p className="p-5">No tienes nuevos mensajes</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 bg-[#bebebec5]">
                                <img className="w-[1.5rem]" src="resource/cursos.png" alt="" />
                                <p className="text-[1.3rem] font-mono">Cursos</p>
                            </div>

                            <div className="flex m-[1rem]">
                                <Link to="/apuntes" className="w-[15rem] h-[15rem] rounded-[1rem] flex flex-col items-center justify-center bg-[#bebebec5] cursor-pointer hover:bg-[#DAF1DE]">
                                    <p>Informatica</p>
                                    <img className="w-[10rem]" src="resource/logo.png" alt="" />
                                    <p className="text-[1.3rem] font-mono">Descripcion</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Informatica