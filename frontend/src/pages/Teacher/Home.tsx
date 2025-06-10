import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen">
                <h1 className='flex items-center justify-center text-center m-[2rem] text-[1.4rem] bg-[#446e5f] text-white p-4 rounded-lg'>Panel de Control</h1>
                <div className="flex flex-col justify-center items-center lg:flex-row gap-5 m-8">


                    <Link to="/add-student" className="bg-[#051f20] flex flex-col items-center justify-center rounded-2xl p-4 cursor-pointer hover:bg-[#23494b] transition-colors duration-200 w-[15rem] h-[15rem] text-center">
                        <p className="text-lg font-medium mb-2 text-white">Agregar alumno al cursado</p>
                        <div className="bg-[#446e5f] rounded-full p-4">
                            <img className="w-24 h-24 object-contain" src="/panelAdmin/add.png" alt="Add student" />
                        </div>
                    </Link>


                    <Link to="/show-students" className="bg-[#051f20] text-white flex flex-col items-center justify-center rounded-2xl p-4 cursor-pointer hover:bg-[#23494b] transition-colors duration-200 w-[15rem] h-[15rem] text-center">
                        <p className="text-lg font-medium mb-2">Ver alumnos inscritos al cursado</p>
                        <div className="bg-[#446e5f] rounded-full p-4">
                            <img className="w-24 h-24 object-contain" src="/panelAdmin/students.png" alt="View students" />
                        </div>
                    </Link>


                    <div className="bg-[#051f20] text-white flex flex-col items-center justify-center rounded-2xl p-4 cursor-pointer hover:bg-[#23494b] transition-colors duration-200 w-[15rem] h-[15rem] text-center">
                        <p className="text-lg font-medium mb-2">Subir nueva tarea</p>
                        <div className="bg-[#446e5f] rounded-full p-4">
                            <img className="w-24 h-24 object-contain" src="/panelAdmin/file.png" alt="Ulpoad files" />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home