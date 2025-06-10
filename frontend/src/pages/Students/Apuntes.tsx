
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BackButton from '../../components/BackButton'

const Apuntes = () => {
    return (
        <div>
            <Header />
            <BackButton />

            <h1 className='flex items-center justify-center text-center m-[2rem] text-[1.4rem] bg-[#446e5f] text-white p-4 rounded-lg'>Material</h1>
            <div className='flex flex-col items-center justify-center m-[1rem] gap-5'>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 1: BASICOS-2025</h2>
                    <a
                        href="apuntes/TEMA_1-TERMINOS-Y-CONCEPTOS-BASICOS-2025.pdf"
                        download="TEMA 1: BASICOS-2025"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 2: MANTENIMIENTO INFORMACION</h2>
                    <a
                        href="apuntes/TEMA_2-MANTENIMIENTO-INFORMACION-2025.pdf"
                        download="TEMA 2: MANTENIMIENTO INFORMACION"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 3:INTEGRADO OFFICE</h2>
                    <a
                        href="apuntes/TEMA_3-INTEGRADO-OFFICE-2025.pdf"
                        download="TEMA 3:INTEGRADO OFFICE"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 4: PLANILLA CALCULO</h2>
                    <a
                        href="apuntes/TEMA_4-PLANILLA-CALCULO-2025.pdf"
                        download="TEMA 4: PLANILLA CALCULO"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 5: PLANILLA CALCULO_AV</h2>
                    <a
                        href="apuntes/TEMA_5-PLANILLA-CALCULO_AV-2025.pdf"
                        download="TEMA 5: PLANILLA CALCULO_AV"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 5: ANEXO-I-FUNCIONES-TRIGONOMÉTRICAS</h2>
                    <a
                        href="apuntes/TEMA_5-I-FUNCIONES-TRIGONOMETRICAS-2025.pdf"
                        download="TEMA 5: ANEXO-I-FUNCIONES-TRIGONOMÉTRICAS"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 5: ANEXO-II-FUNCIONES-LÓGICAS</h2>
                    <a
                        href="apuntes/TEMA_5-II-FUNCIONES-LOGICAS-2025.pdf"
                        download="TEMA 5: ANEXO-II-FUNCIONES-LÓGICAS"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
                <div className='flex flex-col items-center p-[.5rem] rounded-[1rem]'>
                    <h2 className='font-bold'>TEMA 5: ANEXO-III-MATRICES</h2>
                    <a
                        href="apuntes/TEMA_5-II-FUNCIONES-LOGICAS-2025.pdf"
                        download="TEMA 5: ANEXO-III-MATRICES"
                        className='font-bold text-[#235347] hover:text-[#DAF1DE]'
                    >
                        Descargar PDF
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Apuntes