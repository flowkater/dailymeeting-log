export function TopSection() {
  return (
    <div className="border-b pb-4">
      <div className="w-full h-[56px] px-5 py-4 rounded-[12px] border border-[#E2E4EA] bg-[#FAF8FC] flex items-center">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold text-[#1E2024]">
            📣 R&D 공지사항
          </span>
          <span className="text-[#747B8B]">|</span>
          <span className="text-[14px] font-normal text-[#1E2024]">
            2025년도 화이팅입니다!
          </span>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h1 className="text-[24px] font-bold mb-4 flex items-center gap-2">
          <span className="text-primary">🏠</span> 구성원 현황
        </h1>
        <div className="w-full grid grid-cols-3 gap-2">
          <div className="flex items-center gap-2 border border-[#EDEEF2] rounded-[16px] p-6">
            <div className="flex flex-col gap-2">
              <span className="text-blue-800 text-xs bg-blue-100 rounded-full px-2 py-1">
                휴가중인 구성원
              </span>
              <p className="mt-1 font-bold text-[20px]">🏖️ 10명</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-[#EDEEF2] rounded-[16px] p-6">
            <div className="flex flex-col gap-2">
              <span className="text-green-800 text-xs bg-green-100 rounded-full px-2 py-1">
                외근중인 구성원
              </span>
              <p className="mt-1 font-bold text-[20px]">💼 1명</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-[#EDEEF2] rounded-[16px] p-6">
            <div className="flex flex-col gap-2">
              <span className="text-red-800 text-xs bg-red-100 rounded-full px-2 py-1">
                생일인 구성원
              </span>
              <p className="mt-1 font-bold text-[20px]">💖 2명</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
