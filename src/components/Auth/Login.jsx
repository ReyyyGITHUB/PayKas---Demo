import { useState } from "react";
import { Link } from "react-router-dom";
import SafeAreaView from "../SafeAreaView/SafeAreaView";
import LoginBranding from "./LoginBranding/LoginBranding";
import StudentDropdown from "./StudentDropdown/StudentDropdown";
import ContinueButton from "./ContinueButton/ContinueButton";

export default function Login() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentOptions = [
    { id: "01", name: "Nama Bendahara", role: "BENDAHARA" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
    { id: "02", name: "Nama Siswa", role: "" },
  ];

  const handleSelect = (student) => {
    setSelectedStudent(student);
  };

  const continuePath = selectedStudent?.role === "BENDAHARA" ? "/home-bendahara" : "/home-siswa";

  return (
    <>
      <SafeAreaView className="bg-gradient-to-b from-[#F4EAFE] to-[#fff]">
        <div className="w-full mt-[32px] px-[16px]">
          {/* header */}
          <div className="w-full justify-end flex">
            <Link to>
                <h1 className="text-[#7C3AEDCC] text-sm font-medium underline">Tidak punya akun?</h1>
            </Link>
          </div>
          {/* main content */}
          <div className="flex flex-col justify-center items-center">
            <LoginBranding />
            <StudentDropdown
              studentOptions={studentOptions}
              selectedStudent={selectedStudent}
              handleSelect={handleSelect}
            />
            <ContinueButton continuePath={continuePath} />
          </div>
        </div>
      </SafeAreaView>
    </>
  );
}
