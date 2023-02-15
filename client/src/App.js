import logo from './logo.svg';
import './App.css';

import Login from "./components/Login"
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/Signup';
import navbar from './components/navbar/navbar.jsx';
import footer from './components/footer/footer.jsx';




function App() {
  return (
    <main class="bg-dark vh-100 ">
       {/* <Login /> */}
       <Signup />
    </main>
  );
}

export default App;
