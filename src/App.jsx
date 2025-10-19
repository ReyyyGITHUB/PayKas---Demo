import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen.jsx";
import Login from "./components/Auth/Login.jsx";
import HomeSiswa from "./components/HomeSection/HomeSiswa/HomeSiswa.jsx";
import HomeBendahara from "./components/HomeSection/HomeBendahara/HomeBendahara.jsx";

export default function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/home-siswa" element={<HomeSiswa/>} />
        <Route path="/home-bendahara" element={<HomeBendahara/>} />
      </Routes>
    </>
  );
}
