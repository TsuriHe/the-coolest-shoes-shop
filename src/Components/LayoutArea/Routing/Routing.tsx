import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Register from "../../AuthArea/Register/Register";
import AddEmployee from "../../EmployeesArea/addEmployee/addEmployee";
import EditEmployee from "../../EmployeesArea/EditEmployee/EditEmployee";
import EmployeeDetails from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import Employees from "../../EmployeesArea/Employees/Employees";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import SuccessStories from "../../SuccessStoriesArea/SuccessStories/SuccessStories";
import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            
        <Routes>

            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />}/>

            <Route path="/about" element={<About />}/>

            <Route path="/productsList" element={<ProductsList />}/>

            <Route path="/successStories" element={<SuccessStories />}/>

            <Route path="/employees" element={<Employees />}/>

            <Route path="/" element={<Navigate to="/home"/>}/>

            <Route path="*" element={<PageNotFound />}/>

            <Route path="/employees/details/:prodId" element={<EmployeeDetails />} />

            <Route path="/employees/edit/:prodId" element={<EditEmployee />}/>

            <Route path="/employee/new" element={<AddEmployee />} />



        </Routes>


        </div>
    );
}

export default Routing;
