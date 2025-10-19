import SafeAreaView from "../../SafeAreaView/SafeAreaView";

export default function HomeSiswa() {
  return (
    <>
      <SafeAreaView className="bg-gradient-to-b from-[#F7EFFF] to-[#E9DBFF] h-screen">
        <div className="w-full mt-[24px] px-[16px]">
          {/* top content */}
          <div className="flex flex-col w-full">
            {/* header - top */}
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
            {/* header - bottom */}
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

            {/* container button */}
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
          </div>
        </div>
        {/* section bottom */}
        <div className="bg-white w-full mt-[44px]">
          <div className="px-[16px] py-[36px] flex flex-col">
            {/* button laporan */}
            <button className="flex w-full items-center gap-[16px] rounded-[16px] bg-[#B18CFE] px-[16px] py-[12px]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
                <img src="/assets/laporan.svg" alt="" />
              </div>
              <p className="flex-1 text-left text-sm font-semibold leading-snug text-white">
                Cek laporan kas dan aktivitas terbaru.
              </p>
              <div className="flex h-[24px] w-[12px] items-center justify-center">
                <img src="/assets/arrow.svg" alt="" />
              </div>
            </button>

            {/* riwayat keuangan container */}
            <div className="flex flex-col mt-[40px]">
              {/* text */}
              <div className="flex flex-row justify-between">
                <h1 className="text-[18px] font-medium">Riwayat Keuangan</h1>
                <p className="text-sm text-[#8A8A9A]">Lihat semua</p>
              </div>
              {/* container card */}
              <div className="flex flex-col mt-[24px] w-full gap-[12px]">
                {/* card riwayat */}
                <div className="flex flex-row bg-[#FFFFFF] p-[12px] border border-[#F1ECFA] w-full rounded-[12px] gap-[12px] items-center">
                  <div className="w-[36px] h-[36px] flex justify-center items-center bg-[#EAE0FFCC] rounded-[12px]">
                    <img src="/assets/user.svg" alt="" />
                  </div>
                  {/* text + nominal container*/}
                  <div className="flex flex-row justify-between w-full">
                    {/* text wrapper */}
                    <div className="flex flex-col gap-[2px]">
                      <h1 className="text-[#2A2A35]">Bayar Kas</h1>
                      <p className="text-sm text-[#7A7A8B]">Okt 16, 2025 09:24 WIB</p>
                    </div>
                    {/* nominal */}
                    <div className="flex items-center text-[#2AC769]">+Rp 3.000</div>
                  </div>
                </div>
                <div className="flex flex-row bg-[#FFFFFF] p-[12px] border border-[#F1ECFA] w-full rounded-[12px] gap-[12px] items-center">
                  <div className="w-[36px] h-[36px] flex justify-center items-center bg-[#EAE0FFCC] rounded-[12px]">
                    <img src="/assets/user.svg" alt="" />
                  </div>
                  {/* text + nominal container*/}
                  <div className="flex flex-row justify-between w-full">
                    {/* text wrapper */}
                    <div className="flex flex-col gap-[2px]">
                      <h1 className="text-[#2A2A35]">Beli Spidol</h1>
                      <p className="text-sm text-[#7A7A8B]">Okt 15, 2025 07:24 WIB</p>
                    </div>
                    {/* nominal */}
                    <div className="flex items-center text-[#E54B4B]">-Rp 3.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SafeAreaView>
    </>
  );
}
