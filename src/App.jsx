import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Login from "./components/LoginSection/Login";
import HomeSiswa from "./components/HomeSection/HomeSiswa/HomeSiswa";
import HomeBendahara from "./components/HomeSection/HomeBendahara/HomeBendahara";

export default function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/home-siswa" element={<HomeSiswa/>} />
          <Route path="/home-bendahara" element={<HomeBendahara/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
