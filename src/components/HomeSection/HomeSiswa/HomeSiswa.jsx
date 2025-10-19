import SafeAreaView from "../../SafeAreaView/SafeAreaView";
import Actions from "./Actions/Actions";
import Balance from "./Balance/Balance";
import FinancialHistory from "./FinancialHistory/FinancialHistory";
import Header from "./Header/Header";
import ReportButton from "./ReportButton/ReportButton";

export default function HomeSiswa() {
  return (
    <>
      <SafeAreaView className="bg-gradient-to-b from-[#F7EFFF] to-[#E9DBFF] h-screen flex flex-col">
        <div className="w-full mt-[24px] px-[16px]">
          {/* top content */}
          <div className="flex flex-col w-full">
            <Header />
            <Balance />
            <Actions />
          </div>
        </div>
        {/* section bottom */}
        <div className="bg-white w-full mt-[44px] flex-1">
          <div className="px-[16px] py-[36px] flex flex-col">
            <ReportButton />
            <FinancialHistory />
          </div>
        </div>
      </SafeAreaView>
    </>
  );
}
