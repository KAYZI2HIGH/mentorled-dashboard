import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Bell, Gift, MessageCircle, Settings } from 'lucide-react';

const items = [
  {
    title: "Notification",
    url: "#",
    icon: Bell,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Gifts",
    url: "#",
    icon: Gift,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];


const FooterNavbar = () => {
  return (
    <div className="flex gap-5 w-full bg-white md:hidden">
      {items.map((item, key) => {
        return (
          <Button
            key={key}
            variant="ghost"
            className="flex flex-col items-center gap-1 h-[75px] flex-1"
            asChild
          >
            <Link
              href={item.url}
              className="flex flex-col items-center gap-1"
            >
              <item.icon className="size-[24px]" />
              <span className="text-[12px] font-medium text-[#4B5563]">
                {item.title}
              </span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default FooterNavbar