import { Carousel } from "@ark-ui/react/carousel";
import { useRef } from "react";

interface ThumbnailsCarouselProps {
  images: Array<{ url: string; caption?: string }>;
}

export function ThumbnailsCarousel({ images }: ThumbnailsCarouselProps) {
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="max-w-2xl p-2 mx-auto"
      onPageChange={(details) => {
        // Auto-scroll thumbnail into view
        const container = thumbnailContainerRef.current;
        if (container) {
          const thumbnails = container.querySelectorAll('[data-scope="carousel"][data-part="indicator"]');
          const currentThumbnail = thumbnails[details.page] as HTMLElement;
          if (currentThumbnail) {
            currentThumbnail.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }
      }}
    >
      <Carousel.ItemGroup className="overflow-hidden rounded-lg shadow-lg mb-4 bg-gray-50">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index} className="flex items-center justify-center h-80">
            <img
              src={image.url}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover object-[center_25%]"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="p-2 bg-white/90 hover:bg-white text-pink-600 rounded-lg transition-all shadow-md hover:shadow-lg shrink-0">
          ←
        </Carousel.PrevTrigger>

        <div 
          ref={thumbnailContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2 snap-x snap-mandatory"
        >
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-3 border-transparent data-[current]:border-pink-500 data-[current]:shadow-lg data-[current]:scale-110 rounded-md overflow-hidden cursor-pointer transition-all hover:border-pink-300 snap-center"
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-12 object-cover"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="p-2 bg-white/90 hover:bg-white text-pink-600 rounded-lg transition-all shadow-md hover:shadow-lg shrink-0">
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
