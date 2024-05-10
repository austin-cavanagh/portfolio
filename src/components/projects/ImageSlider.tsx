import { Carousel } from 'flowbite-react';
import { b2cEcommerceWebsiteScreenshots } from '../../assets/projectScreenshots';

export default function Component() {
  return (
    <div className="h-full w-full">
      <Carousel pauseOnHover>
        {b2cEcommerceWebsiteScreenshots.map((image, index) => {
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
