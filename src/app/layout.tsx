import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom-ui/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard - Control all in one place.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="bg-[#f3f2f7] w-full h-screen">
            {/* <SidebarTrigger /> */}
            {children}
            {/* <div className="w-full px-5 py-2 shadow-sm border-t bg-white z-50 flex gap-5 justify-between items-center md:hidden">
              {items.map((item, key) => {
                return (
                  <Button
                    key={key}
                    variant="ghost"
                    className="flex flex-col items-center gap-1 h-[75px] w-fit"
                    asChild
                  >
                    <Link
                      href={item.url}
                      className="flex flex-col items-center gap-1 h-full w-full"
                    >
                      <item.icon className="size-[24px]" />
                      <span className="text-[12px] font-medium text-[#4B5563]">
                        {item.title}
                      </span>
                    </Link>
                  </Button>
                );
              })}
            </div> */}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
