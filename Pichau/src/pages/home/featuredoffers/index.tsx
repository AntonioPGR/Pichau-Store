// COMPONENTS
import { ProductsList } from 'components/products';

// MODULES
import { SearchFilter } from 'modules/searchFilter';

// DATA
import productsJson from 'data/products.json';

// UTILS
import { convertObjectsIntoProducts } from 'utils/jsonToProductArray';
import { getRandomItens } from 'utils/getRandomItens';

// STYLES
import styles from './featuredOffers.module.scss';

// EXTERNAL
import { AiFillFire } from 'react-icons/ai';

export function FeaturedOffers(){

  const products = convertObjectsIntoProducts(productsJson);
  const offers = SearchFilter.productsWithOffers(products);
  const randomOffers = getRandomItens(offers, 4);

  return (
    <div>
      <h2 className={styles.title} >Ofertas em destaque <AiFillFire className={styles.icon} /> </h2>
      <ProductsList listProducts={randomOffers} />
    </div>
  );

}