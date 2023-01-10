
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes,Route} from "react-router-dom";
import School from "./components/School/School";
import About from "./components/About/About";
import Sign from "./components/Sign/Sign"
import Home from "./components/Home/Home"
import Course from "./components/Course/Course";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/School"} element={<School/>}/>
            <Route path={"/Course"} element={<Course/>}/>
            <Route path={"/About"} element={<About/>}/>
            <Route path={"/Sign"} element={<Sign/>}/>
            <Route path={"/Header"} element={<Header/>}/>
            <Route path={"/Home"} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
