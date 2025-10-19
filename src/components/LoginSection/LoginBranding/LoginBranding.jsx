export default function LoginBranding() {
  return (
    <>
      {/* image */}
      <div className="w-[304px] flex justify-center items-center mt-[26px]">
        <img
          src="/assets/login-image.png"
          alt=""
          className="object-contain drop-shadow-md"
        />
      </div>
      {/* text container*/}
      <div className="flex flex-col justify-center  items-center text-center mt-[26px]gap-[8px]">
        <h1 className="text-[24px] font-semibold text-[#4F46E5CC]">
          Masuk ke akunmu
        </h1>
        <p className="text-base text-[#6B7280] font-normal">
          Masuk untuk mencatat transaksi dan lihat laporan kas.
        </p>
      </div>
    </>
  );
}
