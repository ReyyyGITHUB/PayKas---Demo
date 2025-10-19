export default function AppInfo() {
  return (
    <>
      <div className="w-12">
        <img src="/assets/paykas.svg" alt="PayKas logo" className="object-contain" />
      </div>

      <div className="mt-8 flex flex-col items-center gap-[18px] max-w-[290px]">
        <h1 className="text-[24px] font-semibold text-[#6D28D9CC]">PayKas</h1>
        <p className="text-sm text-[#7C3AED99]">Catat, kontrol, dan pantau keuanganmu setiap hari</p>
      </div>
    </>
  );
}