import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BackButton from "../../components/BackButton"
import useAddStudent from "../../hooks/useAddStudents";
import StudentForm from "../../components/StudentForm";

const AddStudent = () => {
    const { name, setName, email, setEmail, handleSubmit } = useAddStudent();

    return (
        <div>
            <Header />
            <BackButton />
            <div className="h-screen flex flex-col">
                <h1 className='flex items-center justify-center text-center m-[2rem] text-[1.4rem] bg-[#446e5f] text-white p-4 rounded-lg'>Agregar alumno al cursado</h1>

                <div className="flex items-center justify-center m-[3rem]">
                    <StudentForm
                        name={name}
                        email={email}
                        setName={setName}
                        setEmail={setEmail}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddStudent