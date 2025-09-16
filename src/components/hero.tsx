import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import {
    Card,
    CardContent
} from "@/components/ui/card";

import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [carouselAPI, setCarouselAPI] = useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!carouselAPI) return;

        setSelectedIndex(carouselAPI.selectedScrollSnap());
    }, [carouselAPI]);

    const scrollTo = (index: number) => {
        if (!carouselAPI) return;

        carouselAPI.scrollTo(index);
    };

    useEffect(() => {
        if (!carouselAPI) return;

        onSelect();

        setScrollSnaps(carouselAPI.scrollSnapList());

        carouselAPI.on("select", onSelect);
    }, [carouselAPI, onSelect]);

    return (
        <div>
            <Carousel
                plugins={[Autoplay({ delay: 2500 })]}
                opts={{ loop: true, align: "center" }}
                setApi={setCarouselAPI}
            >
                <CarouselContent>
                    {[...Array(15)].map((_, index) => (
                        <CarouselItem key={index + 1} className="max-w-[25%]">
                            {/* <div className="border rounded-md h-[16rem] bg-muted/50 flex items-center justify-center md:h-[20rem]">
                <img src={`projects/${index+1}.jpg`} alt={`${index+1}`} className="w-full h-[400px] object-cover" />
              </div> */}
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                     <img
                                        src={`projects/${index+1}.jpg`}
                                        alt={`${index+1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-4 space-x-2">
                {scrollSnaps.map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => scrollTo(index)}
                        size="icon"
                        className={`w-2 h-2 rounded-full ${selectedIndex === index ? "bg-primary" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
