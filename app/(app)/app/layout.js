import AppNavBar from "@/app/components/AppNavBar";
import SideBar from "@/app/components/SideBar";







export default function RootLayout({ children }) {
  return (
<>
<AppNavBar />
<div className="">
<div className="flex flex-row  ">
<SideBar />

<div className="md:px-8  px-5  mt-28">

{children}
</div>
</div>
</div>
</>
  );
}
