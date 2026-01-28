import { Route, Routes } from "react-router-dom";
import { PreLoader, MainPage } from "../index";


const App = () => {
  return ( 
      <Routes>
        <Route path="/" element={<PreLoader />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    )
  }

export default App
