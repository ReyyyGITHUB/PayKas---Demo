import { Link } from "react-router-dom";

export default function ContinueButton({ continuePath }) {
  return (
    <div className="w-full justify-center items-center flex bottom-[60px] fixed px-[16px]">
      <Link
        to={continuePath}
        className="flex bg-gradient-to-r from-[#5B21B6] to-[#3B82F6] w-full justify-center py-[16px] rounded-[12px]"
      >
        <span className="text-white font-medium">Masuk</span>
      </Link>
    </div>
  );
}
