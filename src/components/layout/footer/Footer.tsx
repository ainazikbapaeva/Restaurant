'use client';

import Image from 'next/image';
import scss from './footer.module.scss';
import footer_logo from '@/assets/images/header-logo.svg';
import Link from 'next/link';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer_nav}>
        <Image src={footer_logo} alt="footer_logo" />
          <div className={scss.Link}>
            <Link href="/">Интерьер</Link>
            <Link href="/">О нас</Link>
            <Link href="/">Меню</Link>
            <Link href="/">Контакты</Link>
          </div>
        <div className={scss.footer_icons}>
          <button>
            <FaTelegramPlane />
          </button>
          <button>
            <FaInstagram />
          </button>
        </div>
        </div>
      </div>
      <div className={scss.footer_line}></div>
      <h2 className={scss.footer_text}>&copy; 2023 Motion Study LLC</h2>
    </footer>
  );
};

export default Footer;
