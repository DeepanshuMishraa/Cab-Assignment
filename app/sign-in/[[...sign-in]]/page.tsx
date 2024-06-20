import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen w-full">
        <SignIn/>
    </div>
    <Footer/>
    </>
  )
}