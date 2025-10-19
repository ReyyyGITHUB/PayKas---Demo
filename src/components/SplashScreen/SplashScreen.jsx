import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SafeAreaView from "../SafeAreaView/SafeAreaView";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import AppInfo from "./AppInfo/AppInfo";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <>
      <SafeAreaView className="flex min-h-screen bg-gradient-to-b from-[#FCE7F3] to-[#FDF2F8]">
        <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
          <AppInfo />
          <LoadingAnimation />
        </div>
      </SafeAreaView>
    </>
  );
}
