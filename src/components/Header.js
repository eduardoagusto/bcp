import Image from "next/image";
import Logo from "@/assets/celoLogo.svg"


const Header = () => {
    
    return (
	<nav className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0">
		<div className="flex items-center flex-shrink-0 mx-3 lg:mx-6">
			<a href="#">
                <Image className="w-3/4 md:w-4/5 lg:w-full" src={Logo} alt="Logo BCP"/>			
            </a>
		</div>

		<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
			<ul className="lg:flex justify-end flex-1 items-center">
                <a className="w-40 h-12 bg-[#00EA75] rounded-3xl flex items-center justify-center">
                    <span className="text-white font-black">WHATSWAPP</span>
                </a>
			</ul>
		</div>
	</nav>
	
    );
}

export default Header;