"use client";

import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useStoreUser } from "@/hooks/useStoreUser";
import { BarLoader } from 'react-spinners';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Unauthenticated } from 'convex/react';
import { Button } from './ui/button';
import { Authenticated } from 'convex/react';
import { LayoutDashboard } from 'lucide-react';
//using ingest also for backend overflows
const Header = () => {
    const { isLoading }=useStoreUser();
  const path=usePathname();
  return (
   <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdropp-filter]:bg-white/60">
       <nav className=" mx-auto    px-2 h-37 flex items-center justify-between border">
         <Link href='/' className="flex items-center gap-2">
         <Image
            src={"/logos/ChatGPT Image Jul 15, 2025, 03_42_10 AM.png"}
            alt="SplitBee Logo"
            width={150}
            height={70}
           
           
          />
         </Link>
         {path==="/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link href="#2dc86etures" className="text-2xl font-medium hover:text-green-600 transition">
              Features
            </Link>
              <Link href="#21cd33tures" className="text-2xl font-medium hover:text-green-600 transition">
             How it works
            </Link>
          </div>
         )}

         <div className='flex items-center gap-4'>
          <Authenticated>
          <Link href="/dashboard">
          <Button variant="outline" className="hidden md:inline-flex items-center  gap-2 bg-green-600 hover:text-green-600 hover:bg-black transition   " > 
          <LayoutDashboard className="h-4 w-7" />DashBoard
          </Button>
          <Button variant="ghost" className="md:hidden w-10 h-10 p-0" >
            <LayoutDashboard className="h-4 w-4" />
          </Button>
          </Link>
          <UserButton  />
          </Authenticated>
          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"} className="text-lg">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-green-200 hover:bg-green-600 text-xl border-none">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
         </div>
       </nav>

            {isLoading && <BarLoader width={"100%"} color="#0ceb00" />}
   </header>
  )
}

export default Header;