export type Student = {
    _id: string;
    name: string;
    email: string;
};

type Props = {
    students: Student[];
    onDelete: (id: string) => void;
};

const StudentList: React.FC<Props> = ({ students, onDelete }) => {
    return (
        <div className="min-h-screen">
            {students.map((student) => (
                <div
                    key={student._id}
                    className='h-[10rem] text-white bg-[#446e5f] w-[30rem] flex items-center justify-around mt-[3rem] p-4 rounded-lg'
                >
                    <div className='flex flex-col'>
                        <p className='font-bold'>Nombre del alumno:</p>
                        <p>{student.name}</p>

                        <p className='font-bold'>Email:</p>
                        <p>{student.email}</p>
                    </div>

                    <i
                        className="fa fa-trash-o text-black cursor-pointer bg-[#fff] w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
                        aria-hidden="true"
                        onClick={() => onDelete(student._id)}
                    ></i>
                </div>
            ))}
        </div>
    );
};

export default StudentList;
