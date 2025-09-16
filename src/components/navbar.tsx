import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu, ShoppingBag } from "lucide-react";

const Navbar = () => {
    return (
        <header className="w-full bg-slate-50 shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left: Logo */}
                <div className="flex flex-col justify-center items-center text-sm">
                    <a href="/millenniumdachroof/">
                        <img src="/millenniumdachroof/logo.png" className="w-16 h-16" />
                        <p className="text-[#0ac0ac]">
                            Millenium <span className="text-black">Dach Roof</span>
                        </p>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/millenniumdachroof/" className="text-gray-700 hover:text-teal-500 transition-colors">
                                    ACASĂ
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/millenniumdachroof/about" className="text-gray-700 hover:text-teal-500 transition-colors">
                                    DESPRE NOI
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/millenniumdachroof/contact" className="text-gray-700 hover:text-teal-500 transition-colors">
                                    CONTACT
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Right: Cart & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                        <a href="/millenniumdachroof/cart">
                            <ShoppingBag className="h-8 w-8 text-gray-700" />
                        </a>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5 text-gray-700" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 bg-white p-6">
                            <nav className="flex flex-col gap-4 text-lg font-medium">
                                <a href="/millenniumdachroof/" className="hover:text-teal-500 transition-colors">Acasă</a>
                                <a href="/millenniumdachroof/about" className="hover:text-teal-500 transition-colors">Despre noi</a>
                                <a href="/millenniumdachroof/contact" className="hover:text-teal-500 transition-colors">Contact</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
