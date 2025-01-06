import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeaderSection() {
  return (
    <header className="flex items-center justify-between w-full h-[72px] px-6 border-b border-[#EDEEF2]">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={128} height={20} priority />
      </div>
      <div className="flex items-center">
        <Avatar className="w-10 h-10 rounded-[14px]">
          <AvatarImage
            src="/avatar-sample.png"
            alt="Profile"
            className="rounded-[14px]"
          />
          <AvatarFallback className="rounded-[14px]">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
