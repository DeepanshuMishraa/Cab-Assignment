import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import {  SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen w-full">
        <SignUp/>
    </div>
    <Footer/>
    </>
  )
}