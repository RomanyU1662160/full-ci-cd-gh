'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/products', label: 'Products' },
];

function Navbar() {
  const path = usePathname();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand text-white' href='/'>
          <Image
            src='/next.svg'
            width={50}
            height={50}
            alt='logo'
            className={`text-info rounded-circle border border-info `}
          />
        </Link>
        <button
          className='navbar-toggler bg-info'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-info'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {links.map((link) => {
              return (
                <div className='nav-item mx-3' key={link.label}>
                  <Link
                    href={link.href}
                    className={`nav-link text-info ${
                      path === link.href ? styles.activeLink : ''
                    } `}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
