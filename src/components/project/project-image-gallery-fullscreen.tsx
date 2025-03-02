"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";

interface ProjectFullscreenGalleryProps {
  images: string[];
  initialSlide?: number;
  onClose: () => void;
}

export function ProjectFullscreenGallery({
  images,
  initialSlide = 0,
  onClose,
}: ProjectFullscreenGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mainApi, setMainApi] = useState<CarouselApi | null>(null);

  console.log(images);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose, isZoomed]);

  useEffect(() => {
    if (mainApi) {
      mainApi.scrollTo(initialSlide);
    }
  }, [mainApi, initialSlide]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 hover:bg-background/90"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {isZoomed ? (
              <ZoomOut className="h-4 w-4" />
            ) : (
              <ZoomIn className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 hover:bg-background/90"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Carousel
          setApi={setMainApi}
          opts={{
            loop: true,
            skipSnaps: false,
            startIndex: initialSlide,
          }}
          className="w-full h-[calc(100vh-4rem)] max-w-[1920px] mx-auto"
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <div
                    className={`relative w-full h-full ${
                      isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-300 ${
                        isZoomed ? "scale-100" : "scale-90"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg?height=1080&width=1920"}
                        alt={`Project image ${index + 1}`}
                        width={1500}
                        height={1500}
                        priority={index === initialSlide}
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 h-12 w-12" />
          <CarouselNext className="right-4 h-12 w-12" />
        </Carousel>
      </div>
    </motion.div>
  );
}
