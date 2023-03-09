import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import { Home } from "./Components/Home.js";
import About from "./Components/About.js";
import NoteState from "./context/notes/NoteState.js";
import { Alert } from "./Components/Alert.js";
import Signup from "./Components/Signup.js";
import Login from "./Components/Login.js";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Welcome to Inotebook online notes service!!!" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
