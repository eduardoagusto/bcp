import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppIcon () {

    return (
        <div className="block fixed lg:hidden right-5 bottom-5">
            <a
            className="w-10 h-10 rounded-full bg-[#00EA75] flex items-center justify-center" href="https://web.whatsapp.com/">
                <FontAwesomeIcon className="text-white text-2xl" icon={faWhatsapp} />
            </a>
        </div>
    );
}

export default WhatsAppIcon;