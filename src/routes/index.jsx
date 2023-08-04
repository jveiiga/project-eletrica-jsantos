import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import About from "../pages/About"
import Location from "../pages/Location"


const RoutesMain = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categorias" element={<Category />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/localizacao" element={<Location />} />
            </Routes>
        </>
    )
}

export default RoutesMain