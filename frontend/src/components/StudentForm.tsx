import React from "react";

type Props = {
    name: string;
    email: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

const StudentForm: React.FC<Props> = ({ name, email, setName, setEmail, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="bg-[#051F20] text-[#DAF1DE] p-[1.5rem] rounded-xl w-full max-w-md space-y-4">
            <div className="flex flex-col">
                <label className="mb-1">Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-md bg-[#DAF1DE] text-[#051F20] focus:outline-none focus:ring-2 focus:ring-[#DAF1DE]"
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded-md bg-[#DAF1DE] text-[#051F20] focus:outline-none focus:ring-2 focus:ring-[#DAF1DE]"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-[#DAF1DE] text-[#051F20] font-semibold rounded-md hover:bg-[#235347] hover:text-[#DAF1DE] transition-colors"
            >
                Agregar
            </button>
        </form>
    );
};

export default StudentForm;