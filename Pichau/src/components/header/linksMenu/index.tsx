// EXTERNAL
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styles from './linksMenu.module.scss';

interface PropsLinksMenu{
  links: {
    label: string,
    to: string
  }[]
}

export function LinksMenu({ links }:PropsLinksMenu){

  const [isMenuOpen, setMenuState] = useState(false);

  // muda o status do menu
  const changeMenu = () => {
    setMenuState(!isMenuOpen);
  };

  // fecha o menu
  const closeMenu = () => {
    setMenuState(false);
  };

  /**
   * renderiza os links do menu de navegação
   * @returns os links em formato jsx
   */
  const renderLinks = () => {
    return links.map((value, index)=>{

      return (
        <Link onClick={closeMenu} className={styles.link} key={index} to={value.to} >
          {value.label}
        </Link>
      );

    });
  };


  return(
    <>
      {isMenuOpen? <div onClick={closeMenu} className={styles.blackBG}></div> : ''}
      <nav 
        className={classNames({
          [styles.navMenu]:true,
          [styles.navMenuOpen]:isMenuOpen
        })} 
      >

        <div 
          onClick={changeMenu}
          className={classNames({
            [styles.menuIcon]:true,
            [styles.menuIconClosed]:true,
            [styles.menuIconOpen]:isMenuOpen
          })} 
        >
          <div className={styles.hamburguer}> </div>
        </div>

        <div 
          className={classNames({
            [styles.linksContainerOpen]:isMenuOpen,
            [styles.linksContainerClosed]:!isMenuOpen
          })}
        >
          {renderLinks()}
        </div>
      </nav>
    </>
  );

}