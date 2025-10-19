import { Link } from "react-router-dom";

export default function ReportButton() {
  return (
    <Link
      to="/download-laporan"
      className="flex w-full items-center gap-[16px] rounded-[16px] bg-[#B18CFE] px-[16px] py-[12px]"
    >
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
        <img src="/assets/laporan.svg" alt="" />
      </div>
      <p className="flex-1 text-left text-sm font-semibold leading-snug text-white">
        Cek laporan kas dan aktivitas terbaru.
      </p>
      <div className="flex h-[24px] w-[12px] items-center justify-center">
        <img
          src="/assets/arrow.svg"
          alt=""
          className="rotate-270"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </Link>
  );
}
