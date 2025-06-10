import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import type { Student } from "../components/StudentList";

const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        axios
            .get("https://catedraif.onrender.com/api/students")
            .then((res) => setStudents(res.data))
            .catch((err) => console.error("Error al obtener alumnos:", err));
    }, []);

    const deleteStudent = (id: string) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://catedraif.onrender.com/api/students/${id}`)
                    .then(() => {
                        setStudents((prev) => prev.filter((s) => s._id !== id));
                        Swal.fire("Eliminado", "El alumno ha sido eliminado.", "success");
                    })
                    .catch((err) => {
                        console.error("Error al eliminar alumno:", err);
                        Swal.fire("Error", "No se pudo eliminar el alumno.", "error");
                    });
            }
        });
    };

    return { students, deleteStudent };
};

export default useStudents;
