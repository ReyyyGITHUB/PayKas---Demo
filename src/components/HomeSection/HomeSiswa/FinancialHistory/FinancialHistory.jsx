import TransactionCard from "./TransactionCard/TransactionCard.jsx";

export default function FinancialHistory() {
  const transactions = [
    {
      title: "Bayar Kas",
      date: "Okt 16, 2025 09:24 WIB",
      amount: 3000,
      type: "income",
    },
    {
      title: "Beli Spidol",
      date: "Okt 15, 2025 07:24 WIB",
      amount: 3000,
      type: "expense",
    },
    {
      title: "BUAT MAKAN MAKAN SEKELAS",
      date: "Okt 15, 2025 07:24 WIB",
      amount: 1200000,
      type: "exxpanse",
    },
  ];

  return (
    <div className="flex flex-col mt-[40px]">
      {/* header */}
      <div className="flex flex-row justify-between">
        <h1 className="text-[18px] font-medium">Riwayat Keuangan</h1>
        <p className="text-sm text-[#8A8A9A]">Lihat semua</p>
      </div>

      {/* transaction list */}
      <div className="flex flex-col mt-[24px] w-full gap-[12px]">
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </div>
    </div>
  );
}
