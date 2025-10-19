export default function Balance() {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] mt-[32px]">
      {/* nominal container */}
      <div className="flex flex-col justify-center items-center max-w-[300px] gap-[12px]">
        {/* text kas sekarang*/}
        <div
          className="flex flex-row gap-[8px] justify-center itemc
            text-[#A78BFACC]"
        >
          <h1>Kas saat ini</h1>
          <div className="w-[20px] flex justify-center items-center">
            <img src="/assets/wallet.svg" alt="" />
          </div>
        </div>
        {/* nominal kas */}
        <div className="">
          <h1 className="text-[36px] font-bold ">Rp 120.000</h1>
        </div>
      </div>
    </div>
  );
}
