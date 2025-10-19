import React from "react";

export default function TransactionCard({ title, date, amount, type }) {
  const isIncome = type === "income";

  return (
    <div className="flex flex-row bg-[#FFFFFF] p-[12px] border border-[#F1ECFA] w-full rounded-[12px] gap-[12px] items-center">
      {/* icon */}
      <div className="w-[36px] h-[36px] flex justify-center items-center bg-[#EAE0FFCC] rounded-[12px]">
        <img src="/assets/user.svg" alt="" />
      </div>

      {/* text + nominal container */}
      <div className="flex flex-row justify-between w-full">
        {/* text wrapper */}
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-[#2A2A35]">{title}</h1>
          <p className="text-sm text-[#7A7A8B]">{date}</p>
        </div>

        {/* nominal */}
        <div
          className={`flex items-center font-medium ${
            isIncome ? "text-[#2AC769]" : "text-[#E54B4B]"
          }`}
        >
          {isIncome ? "+" : "-"}Rp {amount.toLocaleString("id-ID")}
        </div>
      </div>
    </div>
  );
}
