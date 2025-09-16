import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { constants } from '../assets/constants';
import { Mail, Smartphone, Phone, Facebook, Instagram } from "lucide-react";


const ContactForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column */}
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-3xl font-bold">Contactează-ne</h1>
                    <p className="text-gray-600">
                        Suntem disponibili pentru întrebări, feedback sau oportunități de colaborare. Spuneți-ne cum vă putem ajuta!
                    </p>
                    <div className="space-y-2 text-gray-800">
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
                </div>

                {/* Right Column - Form */}
                <div className="lg:w-1/2">
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    <Input
                                        name="firstName"
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Type your message here."
                                    value={form.message}
                                    onChange={handleChange}
                                />
                                <Button type="submit" className="w-full bg-green-700 hover:bg-green-500 text-white">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
