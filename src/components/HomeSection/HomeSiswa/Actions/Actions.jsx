export default function Actions() {
  return (
    <div className="flex flex-row gap-[12px] mt-[32px] justify-center items-center">
      {/* Button Primary */}
      <div className="flex flex-row gap-[12px] justify-center items-center px-[24px] py-[12px] bg-[#B18CFE4D] rounded-full">
        {/* icon */}
        <div className="w-[24px] flex justify-center items-center">
          <img src="/assets/scan.svg" alt="" />
        </div>
        {/* text */}
        <div className="text-[#7C3AED] font-semibold ">Bayar</div>
      </div>
      {/* Button Secondary */}
      <div className="flex flex-row gap-[12px] justify-center items-center px-[24px] py-[12px] border border-[#C4B5FD] rounded-full">
        {/* icon */}
        <div className="w-[24px] flex justify-center items-center">
          <img src="/assets/leaderboard.svg" alt="" />
        </div>
        {/* text */}
        <div className="text-[#7C3AED] font-semibold ">Leaderboard</div>
      </div>
    </div>
  );
}
