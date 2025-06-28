import FooterNavbar from "@/components/custom-ui/FooterNavbar";
import Header from "@/components/custom-ui/Header";
import MetricsGrid from "@/components/custom-ui/MetricGrid";
import { UserTable } from "@/components/custom-ui/UserTable";
import { CalendarDays } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col w-full h-full">
      <section className="flex-1 px-5 md:px-[80px] py-5 md:py-[50px] space-y-5 overflow-y-scroll ">
        <Header />
        <div className="flex-1 w-full space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 px-2 sm:px-6">
            <div className="hidden md:block">
              <h1 className="text-xl sm:text-2xl font-semibold text-[#39374f]">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Hi, Samantha. Welcome back to Sedap Admin!
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md">
              <CalendarDays className="text-blue-500 w-5 h-5" />
              <div className="text-sm text-gray-700 leading-tight">
                <p className="font-medium">Filter Period</p>
                <p className="text-xs text-gray-500">
                  17 April 2020 - 21 May 2020
                </p>
              </div>
            </div>
          </div>
          <MetricsGrid />
          <UserTable />
        </div>
      </section>
      <FooterNavbar />
    </section>
  );
};

export default Home;
