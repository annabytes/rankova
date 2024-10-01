import { EnrollBtn } from '@/app/elements/enroll-btn/EnrollBtn';
import Logo from '@/app/img/logo.png';
import Image from 'next/image';
import React from 'react';
import './Nav.css';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="nav">
      <Link href="./">
        <Image src={Logo} alt="Ranok" width={200} height={100} />
      </Link>
      <div className="nav-menu">
        <Link href="./#about-us" scroll={true} className="nav-link">
          Про нас
        </Link>
        <Link href="#teachers" className="nav-link">
          Викладачі
        </Link>
        <Link href="#prices" className="nav-link">
          Вартість
        </Link>
        <Link href="#gift-card" className="nav-link">
          Сертифікати
        </Link>
        <Link href="#contact-info" className="nav-link">
          Контакти
        </Link>
        <select name="lang" id="lang">
          <option value="ukr">Укр</option>
          <option value="en">Eng</option>
        </select>
      </div>
      <EnrollBtn />
    </nav>
  );
};
