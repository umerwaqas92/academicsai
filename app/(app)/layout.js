import AppNavBar from "../components/AppNavBar";






export default function RootLayout({ children }) {
  return (
<>
<AppNavBar />

<div className=" md:px-20 px-6 mt-20 ">

{children}
</div>
</>
  );
}
