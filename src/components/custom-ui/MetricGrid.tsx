import Image from "next/image";

export default function MeticsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-1 px-4 py-6 flex items-start gap-4 rounded-lg bg-background border border-border/50">
        <div className="size-16 bg-[#00B07426]/85 flex items-center justify-center rounded-full">
          <div className="size-10 relative">
            <Image
              src={"/icons/total-orders.png"}
              alt="icon-order-svg"
              className="w-full h-full object-contain"
              fill
            />
          </div>
        </div>
        <div className="grid gap-1">
          <p className="text-2xl md:text-3xl font-bold">272</p>
          <p className="text-xs text-muted-foreground">Total Orders</p>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <div className="size-3 grid place-items-center rounded-full bg-primary/20 [&_svg]:size-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20V4m0 0l6 6m-6-6l-6 6"
                ></path>
              </svg>
            </div>
            <span className="opacity-60">4% (1year)</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 px-4 py-6 flex items-start gap-4 rounded-lg bg-background border border-border/50">
        <div className="size-16 bg-[#00B07426]/85 flex items-center justify-center rounded-full">
          <div className="size-10 relative">
            <Image
              src={"/icons/delivered.png"}
              alt="icon-order-svg"
              className="w-full h-full object-contain"
              fill
            />
          </div>
        </div>
        <div className="grid gap-1">
          <p className="text-2xl md:text-3xl font-bold">1926</p>
          <p className="text-xs text-muted-foreground">Total Delivered</p>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <div className="size-3 grid place-items-center rounded-full bg-primary/20 [&_svg]:size-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20V4m0 0l6 6m-6-6l-6 6"
                ></path>
              </svg>
            </div>
            <span className="opacity-60">4% (1year)</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 px-4 py-6 flex items-start gap-4 rounded-lg bg-white border border-border/50">
        <div className="size-16 bg-[#00B07426]/85 flex items-center justify-center rounded-full">
          <div className="size-10 relative">
            <Image
              src={"/icons/revenue.png"}
              alt="icon-order-svg"
              className="w-full h-full object-contain"
              fill
            />
          </div>
        </div>
        <div className="grid gap-1">
          <p className="text-2xl md:text-3xl font-bold">$1,328</p>
          <p className="text-xs text-muted-foreground">Total Revenue</p>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <div className="size-3 grid place-items-center rounded-full bg-rose-500/20 [&_svg]:size-2 text-rose-500 rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20V4m0 0l6 6m-6-6l-6 6"
                ></path>
              </svg>
            </div>
            <span className="opacity-60">4% (1year)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
