import styles from './aboutUs.module.scss';
import Loja from 'assets/imgs/lojaFisicaPichau.jpg';
import Estoque from 'assets/imgs/estoquePichau.webp';

export function AboutUs(){
  return(
    <article>
      <h2 className={styles.title}>Quem somos</h2>
      <div className={styles.paragrafhsContainer}>
        <p className={styles.textParagrafh}>
          Fundada no ano de 2007, a Pichau Informática é uma empresa que trabalha com os mais variados produtos, atuando principalmente no setor de informática e equipamentos eletrônicos em geral, área bastante competitiva e em constante crescimento, onde qualidade, variedade, garantia e eficiência são critérios importantíssimos para total satisfação, confiança e preferência de nossos consumidores.
        </p>
        <p className={styles.textParagrafh}>
          Além do nosso e-commerce possuímos uma loja física situada em Joinville/SC, onde temos a variedade de nosso site ao gosto dos mais exigentes clientes. Oferecemos não apenas a comodidade da compra online, mas também o tratamento olho no olho que muitos preferem e sempre confiam.
        </p>
        <p className={styles.textParagrafh}>
          Procuramos acima de tudo oferecer o que há de melhor, os melhores fornecedores, os mais atualizados produtos, o mais atencioso dos atendimentos, juntamente com os preços mais competitivos e atraentes do mercado para que nosso público encontre não apenas variedade e qualidade, mas também uma empresa que se preocupa com a felicidade e total satisfação de seus clientes e por que não, amigos!
        </p>
        <p className={styles.textParagrafh}>
          Além de nosso site, visite também nossa loja estamos a sua espera
        </p>
      </div>
      <div className={styles.imagesContainer} >
        <div className={styles.imageContainer}>
          <img className={styles.image} src={Loja} alt="loja fisica da pichau" />
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={Estoque} alt="estoque da loja pichau" />
        </div>
      </div>
    </article>
  );
}