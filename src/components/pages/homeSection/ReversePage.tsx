'use client';

import Image from 'next/image';
import scss from './ReversePage.module.scss';
import about_image from '@/assets/images/main_icon.svg';
import reverse_image1 from '@/assets/images/reverse_imaage1.svg';
import reverse_image2 from '@/assets/images/reverse_imag2.svg';
import reverse_image_prev from '@/assets/images/reverse_image_prev.svg';
import { useRef, useState } from 'react';

const ReversePage = () => {
  const [reverse, setReverse] = useState(false);
  const scrollGallery = useRef(null);

  const scrollRight = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
    setReverse(true);
  };

  const scrollLeft = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
    setReverse(false);
  };

  return (
    <section id={scss.Reverse}>
      <div className="containers">
        <div className={scss.Reverse}>
          <div className={scss.Reverse_text}>
            <div className={scss.Reverse_about}>
              <Image src={about_image} alt="About Image" />
              <h2>Бестселлеры</h2>
            </div>
            <h1>Вы резервируете только исключительное</h1>
            <p>
              В каждом месте представлено меню, составленное специально для него. Узнайте, что
              нового в вашем Cafesio, и найдите моменты Covent Carden.
            </p>
          </div>
          <div className={scss.Reverse_image}>
            <Image
              style={{ transform: reverse ? 'rotate(180deg)' : 'rotate(0deg)' }}
              onClick={scrollLeft}
              src={reverse_image_prev}
              alt="Previous"
            />
            <div className={scss.gallery} ref={scrollGallery}>
              <Image src={reverse_image1} alt="Gallery Image 1" />
              <Image src={reverse_image2} alt="Gallery Image 2" />
              <Image src={reverse_image2} alt="Gallery Image 3" />
              <Image src={reverse_image2} alt="Gallery Image 4" />
            </div>
            <Image onClick={scrollRight} src={reverse_image_prev} alt="Next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReversePage;
