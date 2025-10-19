export default function LoadingAnimation() {
  return (
    <div className="mt-16 flex flex-col items-center gap-3" role="status" aria-live="polite">
      <div className="h-10 w-10 rounded-full border-4 border-[#B18CFE33] border-t-[#B18CFE] animate-spin"></div>
      <div className="text-[12px] text-[#B18CFE]">Loading...</div>
    </div>
  );
}
