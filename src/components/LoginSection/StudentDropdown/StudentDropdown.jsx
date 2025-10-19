import { useState } from "react";

export default function StudentDropdown({
  studentOptions,
  selectedStudent,
  handleSelect,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onOptionClick = (student) => {
    handleSelect(student);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="border w-full bg-[#F3E8FF] border-[#B18CFE4D] py-[16px] rounded-[12px] mt-[32px] px-[16px] justify-between flex flex-row"
      >
        <div className="left-contain flex flex-row gap-[8px]">
          <div className="w-[24px]">
            <img src="/assets/user.svg" alt="" />
          </div>
          <div className="text-sm text-[#7C3AEDB2]">
            {selectedStudent
              ? `${selectedStudent.id} - ${selectedStudent.name}${selectedStudent.role ? ` - ${selectedStudent.role}` : ""}`
              : "Pilih Nama Siswa"}
          </div>
        </div>
        <div className="w-[12px] h-[24px] flex justify-center items-center">
          <img
            src="/assets/arrow.svg"
            alt=""
            className={`transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 right-0 bottom-full mb-2 max-h-60 overflow-y-auto rounded-[12px] border border-[#B18CFE4D] bg-[#F3E8FF] shadow-lg">
          {studentOptions.map((student) => (
            <button
              key={student.id}
              type="button"
              onClick={() => onOptionClick(student)}
              className="flex w-full items-center justify-between px-[16px] py-[12px] text-left text-sm text-[#7C3AEDB2] hover:bg-[#E9D5FF] focus:bg-[#E9D5FF]"
            >
              <div className="flex flex-col">
                <span className="font-medium">
                  {student.id} - {student.name}
                </span>
                {student.role && (
                  <span className="text-xs text-[#6D28D9CC]">
                    {student.role}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
