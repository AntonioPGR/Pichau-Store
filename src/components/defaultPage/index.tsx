// COMPONENTS
import { Header } from 'components/header';
import { Footer } from 'components/footer';

// STYLE
import styles from './main.module.scss';

// EXTERNAL
import { Outlet } from 'react-router-dom';

export function DefaultPage(){
  return(
    <>

      <Header />

      <main className={styles.container}>
        <Outlet />
      </main>

      <Footer />

    </>
  );
}