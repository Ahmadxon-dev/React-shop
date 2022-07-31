import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Shop} from "./Components/Shop";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <Shop/>
            <Footer/>
        </>
    );
}

export default App;
