'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeaderSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태 확인
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    // 메인 페이지로 리다이렉트 또는 새로고침
    window.location.reload();
  };

  return (
    <header className="flex items-center justify-between w-full h-[72px] px-6 border-b border-[#EDEEF2]">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={128} height={20} priority />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Avatar className="w-10 h-10 rounded-[14px]">
              <AvatarImage
                src="/avatar-sample.png"
                alt="Profile"
                className="rounded-[14px]"
              />
              <AvatarFallback className="rounded-[14px]">U</AvatarFallback>
            </Avatar>
            <button 
              onClick={handleLogout}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              로그인
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
