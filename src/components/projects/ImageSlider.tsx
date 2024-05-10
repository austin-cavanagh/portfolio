import { Carousel } from 'flowbite-react';

import { b2cEcommerceWebsiteScreenshots } from '../../assets/projectScreenshots';

export default function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {b2cEcommerceWebsiteScreenshots.map((image, index) => {
          return <img key={index} src={image.src} alt={image.alt} />;
        })}
      </Carousel>
    </div>
  );
}
