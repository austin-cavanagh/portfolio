import { Carousel } from 'flowbite-react';

const customTheme = {
  // root: {
  //   base: 'relative h-full w-full',
  //   leftControl:
  //     'absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
  //   rightControl:
  //     'absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
  // },
  control: {
    base: 'inline-flex h-10 w-10 bg-gray-900 opacity-80 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-4',
    icon: 'h-6 w-6 text-white',
  },
  indicators: {
    active: {
      off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 opacity-70',
      on: 'bg-white dark:bg-gray-800 opacity-80',
    },
    base: 'h-3 w-3 rounded-full',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
  },
};

export type ScreenshotLink = {
  src: string;
  alt: string;
};

export type ImageSliderProps = {
  screenshots: ScreenshotLink[];
};

export default function ImageSlider({ screenshots }: ImageSliderProps) {
  return (
    <div className="h-full w-full">
      <Carousel theme={customTheme} pauseOnHover>
        {screenshots.map((image, index) => {
          return (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full object-contain" // Changed to object-contain and removed fixed height
              style={{ height: 'auto' }} // Ensures height adjusts based on the aspect ratio
            />
          );
        })}
      </Carousel>
    </div>
  );
}
