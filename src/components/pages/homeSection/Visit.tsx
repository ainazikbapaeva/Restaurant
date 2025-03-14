'use client';

import React from 'react';
import scss from './VisitPage.module.scss';
import Image from 'next/image';
import img10 from '@/assets/images/main_icon.svg';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { GoArrowRight } from 'react-icons/go';
import line_1 from '@/assets/images/line_1.svg';
import line_2 from '@/assets/images/line_2.svg';

const Visit = () => {
  return (
    <div className="container">
      <div className={scss.visit}>
        <div className={scss.visit_text}>
          <div className={scss.visit_restarant}>
            <Image src={img10} alt="Restaurant Icon" />
            <h2>Посетите ресторан</h2>
          </div>
          <h1>Присоединяйтесь к нам на счастливые часы</h1>
          <div className={scss.visit_your}>
            <h2>Ваш район</h2>
            <h3>225$.Lake Ave.Suite 1150 Pasadena, CA 911101</h3>
          </div>
          <div className={scss.visit_your}>
            <h2>Часы работы:</h2>
            <h3>Пн-Чт: 10:00 - 01:00</h3>
            <h3>Пт-Вс: 10:00 - 02:00</h3>
          </div>
          <div className={scss.Main_buttons}>
            <Image src={line_1} alt="Line 1" className={scss.line_1} />
            <button>
              Просмотреть полное меню <GoArrowRight />
            </button>
            <Image src={line_2} alt="Line 2" className={scss.line_2} />
          </div>
        </div>
        <div className={scss.visit_image}>
          <h1>Контактная информация</h1>
          <h1>
            <BsFillTelephoneOutboundFill /> +771219900
          </h1>
          <h1>
            <MdOutlineEmail /> motionweb312@gmail.com
          </h1>
          <div className={scss.telegram}>
            <h1>
              <FaTelegramPlane />
            </h1>
            <h1>
              <AiFillInstagram />
            </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d477.16048450867737!2d74.61237025479795!3d42.889812057316234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1729328939461!5m2!1sru!2skg"
            width="100%"
            height="250"
            loading="lazy"
            style={{ border: 0, maxWidth: '100%' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Visit;
