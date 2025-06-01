import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left side */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%]  p-6 ">
        <Link href="/" className="flex items-center justify-center gap-2 ">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolDashboard</span>
        </Link>
        <Menu />
      </div>
      {/* right side */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll p-6 flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
