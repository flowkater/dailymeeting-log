'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // 이미 로그인한 상태라면 메인 페이지로 리다이렉트
    const token = localStorage.getItem('auth_token');
    if (token) {
      router.push('/');
    }
  }, []);

  const handleGoogleLogin = () => {
    // 실제 구현 시 여기에 Google 로그인 로직을 추가
    console.log('Google login button clicked');
    
    // 로그인 성공 시 토큰을 저장하고 메인 페이지로 리다이렉트 (예시 코드)
    localStorage.setItem('auth_token', 'example_token_value');
    router.push('/');
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* 왼쪽 패널 */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full gap-8 md:gap-12 p-4 md:p-0 order-2 md:order-1">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#ED4ACD] to-[#8ACCFF] text-transparent bg-clip-text">
              IHFB R&D의 믿음은
            </span>
            <br />
            <span className="text-black">
              세상의 모든 의심을 넘어선다.
            </span>
          </h1>
        </div>
        
        <button
          onClick={handleGoogleLogin}
          className="flex justify-center items-center w-full max-w-[426px] h-[42px] bg-[#1E2024] rounded-lg shadow-md hover:bg-gray-800 transition-colors"
        >
          <div className="flex flex-row justify-center items-center gap-1.5">
            <Image 
              src="/images/google-logo.svg" 
              alt="Google 로고" 
              width={18} 
              height={18} 
            />
            <span className="text-white text-[15px] font-medium">회사 계정으로 로그인하기</span>
          </div>
        </button>
      </div>

      {/* 오른쪽 패널 */}
      <div className="relative w-full md:w-1/2 h-40 md:h-full bg-[#111111] md:shadow-xl md:rounded-l-[48px] overflow-hidden order-1 md:order-2">
        <div className="absolute inset-0 bg-[#297FFF]">
          {/* 배경 이미지 적용 */}
          <div className="w-full h-full relative">
            <Image 
              src="/images/login-image.png"
              alt="로그인 배경 이미지" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#297FFF] to-[#1A0082] opacity-70 mix-blend-normal"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[290px] md:h-[290px] flex justify-center items-center">
          <Image 
            src="/images/rnd-logo.svg" 
            alt="우당탕탕 R&D 로고" 
            className="w-full h-full object-contain drop-shadow-lg"
            width={290}
            height={290}
          />
        </div>
      </div>
    </div>
  );
} 