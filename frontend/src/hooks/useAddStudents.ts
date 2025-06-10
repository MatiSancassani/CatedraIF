import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useAddStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email) {
            Swal.fire("Error", "Nombre y email son requeridos", "error");
            return;
        }

        try {
            await axios.post("https://catedraif.onrender.com/api/students", { name, email });
            Swal.fire({
                title: "Alumno agregado correctamente",
                icon: "success",
            });
            setName("");
            setEmail("");
        } catch (error) {
            Swal.fire("Error", "No se pudo agregar el alumno", "error");
            console.error(error);
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        handleSubmit,
    };
};

export default useAddStudent;
