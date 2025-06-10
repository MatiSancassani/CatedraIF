import Apuntes from './pages/Students/Apuntes'
import Calificaciones from './pages/Students/Calificaciones'
import Informatica from './pages/Students/Informatica'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Teacher/Home'
import AddStudent from './pages/Teacher/AddStudent'
import ShowStudents from './pages/Teacher/ShowStudents'
import RequireTeacher from './components/RequireTeacher'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/apuntes" element={<Apuntes />} />
          <Route path="/calificaciones" element={<Calificaciones />} />


          <Route path="/home" element={<RequireTeacher><Home /></RequireTeacher>} />
          <Route path="/add-student" element={<RequireTeacher><AddStudent /></RequireTeacher>} />
          <Route path="/show-students" element={<RequireTeacher><ShowStudents /></RequireTeacher>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
