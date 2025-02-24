'use client';

import Image from 'next/image';
import scss from './AboutUs.module.scss';
import menu_image from '@/assets/images/main_icon.svg';
import menu_left from '@/assets/images/menu_left.svg';
import menu_right from '@/assets/images/menu_right.svg';

const MenuPage = () => {
  return (
    <section id={scss.Menu}>
      <div className="containers">
        <div className={scss.Menu}>
          <div className={scss.Menu_left}>
            <div className={scss.Menu_text}>
              <Image src={menu_image} alt="Menu Image" width={60} height={60} />
              <h2>О нас</h2>
            </div>
            <h1>Путешествие сквозь ароматы Cafesio</h1>
            <Image className={scss.img} src={menu_left} alt="Menu Left" priority />
          </div>
          <div className={scss.Menu_right}>
            <p>
              Попробуйте блюда, которые откроют вам новые вкусы и порадуют ваш взгляд своим внешним
              видом. Здесь вы найдете уютную атмосферу, отличное обслуживание и внимание к каждому
              гостю. Забронируйте столик сейчас и насладитесь уникальным опытом открытия вкусов!
            </p>
            <Image className={scss.img} src={menu_right} alt="Menu Right" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
