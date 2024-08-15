import React from 'react'
import { useContext,useEffect, useState } from "react";
import Home from './Pages/Home'
import { Context} from "./main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios'


function App() {
  const { isUserAuthenticated, setIsUserAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );

        setIsUserAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };
    fetchUsers();
   
  }, [isUserAuthenticated,setUser]);

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
