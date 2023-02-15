import { Product } from 'modules/product';
import productsJson from 'data/products.json';

/** 
 * Converte um JSON array de objetos em um array de Product
 * @returns array de Product baseado no objetos
*/
export function convertObjectsIntoProducts(productsObjectArray: typeof productsJson) : Product[]{
  return productsObjectArray.map((value)=>{

    return new Product(
      value.description,
      value.price,
      value.id,
      value.photo,
      value.category
    );

  });
}