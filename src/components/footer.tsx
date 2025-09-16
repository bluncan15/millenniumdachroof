import { assets } from '../assets/assets';
import { Mail, Smartphone, Phone, Facebook, Instagram } from "lucide-react";
import { constants } from '../assets/constants';
import { Card, CardContent } from '@/components/ui/card';

export default function Footer() {

    return (
        <Card className="bg-white mt-16 border-none">
            <CardContent className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
                {/* Logo & Description */}
                <div>
                    <img src={assets.logo.src} alt="Millennium Dach Roof" className="mb-5 w-32" />
                    <p className="w-full sm:w-2/3 text-[#0ac0ac]">
                        Millenium <span className="text-black">Dach Roof</span>
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex flex-col text-black cursor-pointer space-y-2">
                        <li><a href="/sitetoni/">Acasă</a></li>
                        <li><a href="/sitetoni/about/">Despre noi</a></li>
                        <li><a href="/sitetoni/contact/">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <p className="text-l font-medium mb-5">Contactează-ne</p>
                    <ul className="flex flex-col text-black gap-2">
                        <li className="flex items-center gap-2">
                            <Smartphone color="#0ac0ac" size={20} />
                            <a href={`tel:${constants.PHONE_NUMBER}`} className="cursor-pointer">{constants.PHONE_NUMBER}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail color="#0ac0ac" size={20} />
                            <a href={`mailto:${constants.EMAIL}`} className="cursor-pointer">{constants.EMAIL}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone color="#0ac0ac" />
                            <a href="http://whatsapp.com" className="cursor-pointer">WhatsApp</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Facebook color="#0ac0ac" />
                            <a href="http://facebook.com" className="cursor-pointer">Facebook</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram color="#0ac0ac" />
                            <a href="http://instagram.com" className="cursor-pointer">Instagram</a>
                        </li>
                    </ul>
                </div>
            </CardContent>

            {/* <Separator className="my-5 border-[#0ac0ac]" /> */}

            <CardContent className="text-center text-sm text-black py-2">
                <p>&copy; 2025 millenniumdachroof.ro. All Rights Reserved.</p>
            </CardContent>
        </Card>
    );
};
