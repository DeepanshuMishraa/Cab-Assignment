import { Montserrat } from "next/font/google"
import { IoLocation, IoLocationOutline, IoLocationSharp, IoLogoClosedCaptioning, IoNavigateCircle } from "react-icons/io5"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { GrNavigate } from "react-icons/gr";
import Image from "next/image";
import { Button } from "../ui/button";

const mons = Montserrat({subsets:["latin"]})

const Hero = () => {
  return (
    <div className="w-full p-8">
      <div className="flex justify-between">
        <div>
        <h1 className={`${mons.className}  font-bold text-5xl`}>We'll take you</h1>

        <h1 className={`${mons.className} flex mt-2 items-center font-bold text-4xl`}> Place <IoLocationOutline className="ml-1"/></h1>

        <p className={`${mons.className}  mt-4  font-normal text-4xl`}>Where    <span className="ml-3">ever,</span></p>
        <p className={`${mons.className} flex mt-2  font-normal text-4xl`}>When <span className="ml-3">ever</span></p>
        <div className="mt-6  max-w-md">

        <p className={`${mons.className} whitespace-normal leading-relaxed text-justify   text-gray-400`}>We have Car Rentals, an Online cab booking, providing customers with reliable Local taxi booking services</p>

        <div className="flex items-center">
            <div className="p-2">
            <Label >From</Label>
            <Input placeholder ="Enter Pickup Location" className="mt-2 bg-gray-300 text-xsm"/>
            </div>

            <div className="flex items-center">
            <IoNavigateCircle size={30} className="items-center mt-6 ml-2 flex justify-center" />
            </div>

            <div className="p-3">
                <Label>To</Label>
                <Input placeholder ="Enter Destination" className="mt-2 bg-gray-300 text-xsm"/>
            </div>
        </div>
        <div className="p-2">
        <Button className="">Book Now</Button>
        </div>
        </div>
        </div>
        <div className="mt-3">
        <img src="https://media.gettyimages.com/id/97463895/video/couple-hailing-cab-in-times-square-at-night-new-york-city-new-york-state-usa.jpg?s=640x640&k=20&c=P0pM7zexVuLFC0otKxhnWoqPEPFGb__QN3vbUXCeYV0=" width={500} height={500} alt="hero" className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}
 
export default Hero
