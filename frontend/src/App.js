import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./component/User/Login/Login";
import Registration from "./component/User/Registration/Registration";
import Container from "./component/Container/Container";

function App() {
  return (
    <div className="App p-3  ">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/content/:id" element={<Container />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
