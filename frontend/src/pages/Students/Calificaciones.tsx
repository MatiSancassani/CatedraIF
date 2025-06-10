import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Calificaciones = () => {
    return (
        <div>
            <Header />
            <div className="h-screen text-center m-2">
                <h1 className='flex items-center justify-center text-center m-[2rem] text-[1.4rem] bg-[#446e5f] text-white p-4 rounded-lg'>Calificaciones</h1>
                <div className="flex flex-col items-center justify-center">
                    <p>El cursado todavia no ha comenzado, aqui podras ver tus calificaciones</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Calificaciones