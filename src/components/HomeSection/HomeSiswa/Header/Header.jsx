export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-center items-center flex font-semibold text-[16px] text-[#8F8FA3]">
        Home-Siswa
      </h1>
      {/* icon container */}
      <div className="flex flex-row gap-[12px]">
        <div className="w-[36px] p-[8px] bg-[#FFFFFF] rounded-full">
          <img src="/assets/faq.svg" alt="" />
        </div>
        <div className="w-[36px] p-[8px] bg-[#B18CFE] rounded-full">
          <img src="/assets/user-white.svg" alt="" className="white" />
        </div>
      </div>
    </div>
  );
}
