import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterSection() {
  return (
    <div className="py-4 border-b">
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">👤</span>
          <Select defaultValue="2025-01-05">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="날짜 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-01-05">2025년 1월 5일</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="팀 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">팀 전체</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex-1 relative">
          <Input placeholder="작성자를 입력해 주세요" className="pl-10" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          글작성하기
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
