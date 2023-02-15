// STYLE
import styles from './header.module.scss';

// ASSETS
import Logo from 'assets/imgs/logo.png';

// DATA
import pagesLink from 'data/pages.json';

// EXTERNAL
import { Link } from 'react-router-dom';
import { LinksMenu } from './linksMenu';

export function Header(){


  return(
    <header className={styles.container} >

      <div className={styles.logoContainer}>
        <Link to={'/'}>
          <img alt="Logo da pichau" src={Logo} className={styles.logo} />
        </Link>
      </div>

      <LinksMenu links={pagesLink} />
      
    </header>
  );
}