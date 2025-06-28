import {
  Calendar,
  ChartColumn,
  ChartNoAxesGantt,
  Coffee,
  Home, 
  MessageCircleMore,
  Pencil,
  SquarePen,
  StickyNote,
  User,
  Users,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Order List",
    url: "#",
    icon: ChartNoAxesGantt,
  },
  {
    title: "Order Detail",
    url: "#",
    icon: StickyNote,
  },
  {
    title: "Customer",
    url: "#",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartColumn,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartColumn,
  },
  {
    title: "Reviews",
    url: "#",
    icon: Pencil,
  },
  {
    title: "Foods",
    url: "#",
    icon: Coffee,
  },
  {
    title: "Food Detials",
    url: "#",
    icon: SquarePen,
  },
  {
    title: "Customer Detials",
    url: "#",
    icon: User,
  },
  {
    title: "Calender",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title: "Wallet",
    url: "#",
    icon: Wallet,
  },
];

function AppSidebar() {
  return (
    <Sidebar className="w-[300px] h-screen bg-white border-r border-[#E5E7EB]">
      <SidebarHeader className="mb-3">
        <h1 className="text-[48px] font-bold leading-14">
          Sedap<span className="text-[#00b075]">.</span>
        </h1>
        <p className="text-[14px] text-[#B9BBBD]">Modern Admin Dashboard</p>
      </SidebarHeader>
      <SidebarContent className="hide_scrollbar">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton
                    className="py-6 text-[16px] text-[#464255]"
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-3">
        <div className="w-full p-5 flex bg-[#00B074] rounded-lg text-white">
          <div className="space-y-3">
            <p>Please, organize your menus through button bellow!</p>
            <Button className="py-5 px-4 bg-[#F2F5F3] text-black hover:bg-[#F2F5F3]/90">
              +Add Menus
            </Button>
          </div>
        </div>
        {/* <div className="text-[#969BA0] text-[14px]">
          <span>
            <h1 className="font-semibold">Sedap Restaurant Admin Dashboard</h1>
            <p>© 2020 All Rights Reserved</p>
          </span>
          <p className="mt-2">Made with 💓 by Kayode</p>
        </div> */}
      </SidebarFooter>
    </Sidebar>
  );
}
export default AppSidebar;
