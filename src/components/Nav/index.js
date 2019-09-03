import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uniqueId from 'uniqid';
import styles from './Nav.module.scss';
import Hamburger from '../../elements/Hamburger';
import content from '../../content';

const NavItem = props => {
  const { link, mobile } = props;
  const { name, href } = link;

  return (
    <li className={mobile ? styles.mobile__item : styles.item}>
      <Link
        key={name}
        to={href}
        className={mobile ? styles.mobile__link : styles.link}
      >
        {name}
      </Link>
    </li>
  );
};

const Nav = props => {
  const { mobile } = props;
  const [open, setOpen] = useState(false);

  const links = content.navItemLinks.map(link => {
    return (
      <NavItem
        mobile={mobile}
        link={link}
        key={uniqueId()}
        onClick={() => setOpen(false)}
      />
    );
  });

  return (
    <nav
      className={`${!mobile ? styles.nav : ''} ${mobile ? styles.mobile : ''}`}
    >
      {mobile ? (
        <Hamburger onClick={() => setOpen(!open)} isActive={open} />
      ) : (
        <ul className={styles.list}>{links}</ul>
      )}
      {open && <ul className={styles.mobile__list}>{links}</ul>}
    </nav>
  );
};

export default Nav;
