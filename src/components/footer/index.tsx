// STYLE
import styles from './footer.module.scss';

// EXTERNAL
import Logo from 'assets/imgs/logo.png';
import { BsTwitter, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaTiktok  } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

export function Footer(){
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="Logo da marca pichau gaming" />
      </div>
      <div className={styles.socialMediaContainer}>
        <h3 className={styles.title}>Siga-nos nas redes sociais</h3>
        <ul className={styles.list}>
          <li>
            <a href="https://twitter.com/pichaugaming" rel="noreferrer" target="_Blank"> <BsTwitter className={styles.icon} /> </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pichauoficial/?hl=pt-br" rel="noreferrer" target="_Blank"> <BsInstagram className={styles.icon} /> </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@pichauoficial" rel="noreferrer" target="_Blank"> <FaTiktok className={styles.icon} /> </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>Entre em contato</h3>
        <ul className={styles.list}>
          <li>
            <BsFillTelephoneFill className={styles.icon} />
            <span className={styles.text}>(47) 3305-5150</span>
          </li>
          <li>
            <GrMail className={styles.icon} />
            <span className={styles.text}>sac@pichau.com.br</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}