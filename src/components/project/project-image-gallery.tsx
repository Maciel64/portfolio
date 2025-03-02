"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";

interface ProjectImageGalleryProps {
  images: string[];
  onFullscreen?: (index: number) => void;
}

export function ProjectImageGallery({
  images,
  onFullscreen,
}: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainApi, setMainApi] = useState<CarouselApi | null>(null);
  const [thumbsApi, setThumbsApi] = useState<CarouselApi | null>(null);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbsApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbsApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbsApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbsApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="relative group">
        <Carousel
          setApi={setMainApi}
          opts={{
            loop: true,
            skipSnaps: false,
          }}
          className="w-full rounded-lg overflow-hidden bg-black/5 dark:bg-white/5"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`main-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-video relative overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg?height=800&width=1200"}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={index === 0}
                      quality={85}
                    />
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          {onFullscreen && (
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
              onClick={() => onFullscreen(selectedIndex)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          )}
        </Carousel>
      </div>

      {images.length > 1 && (
        <Carousel
          setApi={setThumbsApi}
          opts={{
            containScroll: "keepSnaps",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 pl-2 cursor-pointer"
                onClick={() => onThumbClick(index)}
              >
                <div
                  className={`relative aspect-video rounded-md overflow-hidden transition-all ${
                    selectedIndex === index
                      ? "ring-2 ring-primary"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg?height=100&width=150"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </motion.div>
  );
}
