
import Logo from "@/assets/celoLogo.svg"
import Image from "next/image"

export default function HeroSection() {
    return(
        <section className="w-full h-auto flex flex-col lg:flex-row items-center justify-center md:pt-20 lg:pt-40 md:my-36 md:py-20">
               <div className='h-auto text-center mt-28  '>
                    <h1 className='font-black text-white flex-wrap text-xl lg:text-3xl md:text-5xl md:mx-20 md:px-5'>Prepare-se para <span className='text-[#00EA75]'>conquistar</span> o <span className='text-[#00EA75]'>mundo digital!</span></h1>
                </div>           
                <div className="items-center justify-center flex">
                    <Image src={Logo} className="lg:mr-16 lg:px-10 lg:w-3/5"></Image>
                </div>
        </section>
    )
}