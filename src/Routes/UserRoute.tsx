import { Navigate, Route,Routes } from "react-router-dom";
import UserLoggedOut from "./UserLoggedOut";
import UserLoggedIn from "./UserLoggedIn";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Notfound from "../Pages/Notfound";

export const UserRoute = () =>{
    console.log("User route worked")
    return (
        <Routes>
            {/* <Route path="" element={<Home/>}/> */}
            <Route path="" element={<UserLoggedOut/>}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="login" element={<Login/>}/>
           
                <Route path="home" element={<Home/>}/>
                <Route path='profile/:userId' element={<Profile />} />
                <Route path='*' element={<Notfound />} />   
            </Route>
        </Routes>
    )
}