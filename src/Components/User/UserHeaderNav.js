import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../userContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import { useMedia } from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  console.log(mobile);
  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu ? styles.mobileButtonActive : ''
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          activeClassName={styles.active}
          onClick={() => setMobileMenu(false)}
          end
          to="/conta"
        >
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          onClick={() => setMobileMenu(false)}
          to="/conta/estatistica"
        >
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          onClick={() => setMobileMenu(false)}
          to="/conta/postar"
        >
          <Adicionar />

          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
