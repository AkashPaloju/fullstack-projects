import { BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css';
// import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Account from "./pages/account";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Deposit from "./components/Deposit";
import Loan from "./components/Loan";
import DepositorForm from "./components/DepositorForm";


function App() {
  return (
    <div className="App">
      {/* display Navbar here because it is common to every page */}
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/depositform" element={<DepositorForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
