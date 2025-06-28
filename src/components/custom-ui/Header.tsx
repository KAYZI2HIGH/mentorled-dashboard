import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Bell, Gift, MessageCircle, Search, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SidebarTrigger } from '../ui/sidebar';

const Header = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <SidebarTrigger className='md:hidden' />
      <div className="relative w-full ">
        <Input
          className="w-full h-[47px] bg-white border border-black/10 pl-5"
          placeholder="Search here"
        />
        <Search
          size={20}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
        />
      </div>
      <div className="md:flex gap-5 hidden">
        <Button className="bg-[#2D9CDB26]/85 text-blue-600 h-[38px] w-[38px] hover:bg-[#2D9CDB26]/60 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-[#f3f2f7] rounded-full p-[2.5px]">
            <div className="w-full h-full rounded-full bg-[#2d9bdb] text-white text-[8px] flex justify-center items-center">
              21
            </div>
          </span>
        </Button>
        <Button className="bg-[#2D9CDB26]/85 text-blue-600 h-[38px] w-[38px] hover:bg-[#2D9CDB26]/60 relative">
          <MessageCircle size={20} />
          <span className="absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-[#f3f2f7] rounded-full p-[2.5px]">
            <div className="w-full h-full rounded-full bg-[#2d9bdb] text-white text-[8px] flex justify-center items-center">
              21
            </div>
          </span>
        </Button>
        <Button className="bg-[#5E6C9326]/85 text-black/60 h-[38px] w-[38px] hover:bg-[#5E6C9326]/60 relative">
          <Gift size={20} />
          <span className="absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-[#f3f2f7] rounded-full p-[2.5px]">
            <div className="w-full h-full rounded-full bg-[#5e6c93c8] text-white text-[8px] flex justify-center items-center">
              21
            </div>
          </span>
        </Button>
        <Button className="bg-[#FF5B5B26]/85 text-red-600 h-[38px] w-[38px] hover:bg-[#FF5B5B26]/60 relative">
          <Settings size={20} />
          <span className="absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-[#f3f2f7] rounded-full p-[2.5px]">
            <div className="w-full h-full rounded-full bg-[#ff5b5bef] text-white text-[8px] flex justify-center items-center">
              21
            </div>
          </span>
        </Button>
      </div>
      <div className="lg:flex justify-center items-center hidden">
        <h1 className="text-[14px] whitespace-nowrap">
          Hello, <span className="font-medium">Samantha</span>
        </h1>
      </div>
      <Avatar className="w-[40px] h-[40px]">
        <AvatarImage
          src={"/user.jpg"}
          alt="user profiile image"
        />
        <AvatarFallback>FB</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Header