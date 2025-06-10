
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BackButton from '../../components/BackButton'
import useStudents from '../../hooks/useStudents';
import StudentList from '../../components/StudentList';

const ShowStudents = () => {
    const { students, deleteStudent } = useStudents();

    return (
        <div className='min-h-screen'>
            <Header />
            <BackButton />
            <h1 className='flex items-center justify-center text-center m-[2rem] text-[1.4rem] bg-[#446e5f] text-white p-4 rounded-lg'>Lista de Alumnos</h1>

            <div className='flex items-start lg:items-center justify-center gap-[15rem] selection:h-screen'>
                {students.length === 0 && (
                    <p className='text-center m-[2rem] text-[1.4rem]'>No hay alumnos registrados</p>
                )}
                <StudentList students={students} onDelete={deleteStudent} />
                <img src="panelAdmin/studentMenu.png" alt="" className='hidden lg:flex w-[20rem]' />
            </div>
            <Footer />
        </div>
    )
}

export default ShowStudents