import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Laptop, Watch, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Carousel = ({ children, className = "", ...props }) => {
    return (
        <div className={`relative ${className}`} {...props}>
            {children}
        </div>
    );
};

const CarouselContent = ({ children, currentSlide = 0, className = "" }) => {
    return (
        <div className={`flex transition-transform duration-700 ease-in-out ${className}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {children}
        </div>
    );
};

const CarouselItem = ({ children, className = "" }) => {
    return (
        <div className={`min-w-full ${className}`}>
            {children}
        </div>
    );
};

const CarouselPrevious = ({ onClick, className = "" }) => {
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-white/20 hover:border-white/40 z-10 ${className}`}
        >
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
};

const CarouselNext = ({ onClick, className = "" }) => {
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-white/20 hover:border-white/40 z-10 ${className}`}
        >
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
};

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loaded, setLoaded] = useState(false);

    const slides = [
        {
            id: 1,
            title: "iPhone 17",
            subtitle: "PRO",
            description: "până la 24 rate cu 0% dobândă,",
            bonus: "150 lei BONUS prin Easy BuyBack",
            availability: "Disponibil din 19.09, ora 08:00",
            buttonText: "Precomandă acum",
            bgColor: "from-orange-500 to-orange-600",
            textColor: "text-white",
            icon: Smartphone,
            productImage: "projects/1.jpg"
        },
        {
            id: 2,
            title: "MacBook Pro",
            subtitle: "M4",
            description: "până la 36 rate cu 0% dobândă,",
            bonus: "300 lei BONUS prin Trade-in",
            availability: "Disponibil din 20.09, ora 10:00",
            buttonText: "Comandă acum",
            bgColor: "from-slate-700 to-slate-900",
            textColor: "text-white",
            icon: Laptop,
            productImage: "💻"
        },
        {
            id: 3,
            title: "Apple Watch",
            subtitle: "ULTRA",
            description: "până la 12 rate cu 0% dobândă,",
            bonus: "100 lei BONUS prin upgrade",
            availability: "Disponibil din 21.09, ora 09:00",
            buttonText: "Rezervă acum",
            bgColor: "from-blue-600 to-blue-800",
            textColor: "text-white",
            icon: Watch,
            productImage: "⌚"
        },
        {
            id: 4,
            title: "AirPods Pro",
            subtitle: "3RD GEN",
            description: "până la 6 rate cu 0% dobândă,",
            bonus: "50 lei BONUS prin bundle",
            availability: "Disponibil din 18.09, ora 12:00",
            buttonText: "Cumpără acum",
            bgColor: "from-purple-600 to-purple-800",
            textColor: "text-white",
            icon: Headphones,
            productImage: "🎧"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="w-full h-3/4 flex items-center justify-center">
            <Carousel className="w-5/6 overflow-hidden rounded-2xl shadow-2xl">
                <CarouselContent currentSlide={currentSlide} className="h-full">
                    {slides.map((slide, index) => (
                        <CarouselItem key={slide.id}>
                            <Card className={`h-full border-0 rounded-none overflow-hidden bg-gradient-to-br ${slide.bgColor}`}>
                                <CardContent className="h-full flex items-center justify-between px-6 md:px-8 lg:px-12">
                                    {/* Content Section */}
                                    <div className={`flex-1 ${slide.textColor} z-10`}>
                                        <div className="max-w-lg">
                                            {/* Brand and Product Name */}
                                            {/* <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <slide.icon className="w-4 h-4 text-gray-800" />
                      </div>
                      <h1 className="text-lg md:text-xl font-light tracking-wide">
                        {slide.title}
                      </h1>
                    </div> */}

                                            {/* Main Product Title */}
                                            <div className="mb-6">
                                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none drop-shadow-lg">
                                                    {slide.subtitle}
                                                </h2>
                                            </div>

                                            {/* Offer Description */}
                                            <div className="mb-6 space-y-1">
                                                <p className="text-sm md:text-base font-light opacity-95">
                                                    {slide.description}
                                                </p>
                                                <p className="text-sm md:text-base font-semibold">
                                                    {slide.bonus}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Showcase */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="text-6xl md:text-7xl lg:text-8xl opacity-80 transform rotate-12 hover:rotate-6 transition-transform duration-500 drop-shadow-2xl">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center">
                                                        <img
                                                            src={`projects/${index + 1}.jpg`}
                                                            alt={`${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75 -z-10"></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Controls */}
                <CarouselPrevious onClick={prevSlide} className="left-2" />
                <CarouselNext onClick={nextSlide} className="right-2" />

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Indicator */}
                {isAutoPlaying && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                        <div
                            className="h-full bg-white/80 transition-all duration-100 ease-linear shadow-sm"
                            style={{
                                width: `${((currentSlide + 1) / slides.length) * 100}%`
                            }}
                        />
                    </div>
                )}
            </Carousel>
        </div>
    );
};

export default HeroCarousel;