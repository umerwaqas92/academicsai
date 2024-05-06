
import AppNavBar from "@/app/components/AppNavBar";







export default function RootLayout({ children }) {
  return (
<>
<AppNavBar />


<div className=" md:px-20 px-6 mt-28 ">

{children}
</div>
</>
  );
}
