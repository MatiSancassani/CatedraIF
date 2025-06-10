import { Link } from "react-router-dom"
const BackButton = () => {
    return (
        <>
            <Link to="/home" className='inline-flex items-center gap-2 ml-[1rem] p-[.5rem]'>
                <i className="txt-center fa fa-chevron-circle-left"></i>
                <p className="text-[1.3rem]">Volver</p>
            </Link>
        </>
    )
}

export default BackButton