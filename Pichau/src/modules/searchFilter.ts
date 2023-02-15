// MODULES
import { Product } from 'modules/product';
import { Filter } from 'modules/filter';
import { OrderTag } from 'modules/orderTag';
import { ToOrderProducts } from 'modules/toOrder';

export class SearchFilter {

  public static filter(
    products: Product[],
    filter: Filter | undefined,
    searchQuery: string | undefined,
    order: OrderTag | undefined
  ){

    let filteredProducts = products;
    filteredProducts = filter? SearchFilter.filterProducts(filteredProducts, filter) : filteredProducts;
    filteredProducts = searchQuery? SearchFilter.searchInProducts(filteredProducts, searchQuery) : filteredProducts;
    filteredProducts = order? SearchFilter.orderProducts(filteredProducts, order) : filteredProducts;

    return filteredProducts;

  }

  /**
   * Filtra os produtos passados e retorna um array contendo apenas os filtrados
   * @param products produtos a serem filtrados
   * @param filter filtro a submeter os produtos
   * @returns produtos filtrados
   */
  public static filterProducts(
    products: Product[],
    filter: Filter
  ) : Product[]  {
    const filteredProducts = products.filter((value)=>{
      return value.getCategoryId() === filter.id;
    });
    return filteredProducts;
  }

  /**
   * Busca nos produtos passados a tag de pesquisa
   * @param products produtos a serem filtrados
   * @param searchTag tag de busca pelos produtos
   * @returns array de Product[] somente com os resultados
   */
  public static searchInProducts(
    products: Product[],
    searchTag: string
  ) : Product[] {
    const searchedProducts = products.filter((value)=>{
      if(value.description.includes(searchTag)){
        return true;
      }
      if(value.getCategoryLabel().includes(searchTag)){
        return true;
      }
      return false;
    });

    return searchedProducts;
  }

  /**
   * Ordana os produtos passados de acordo com a ordem desejada
   * @param products Product[] a ser ordenado
   * @param order OrderTar na qual o Product[] será submetido 
   * @returns Product[] ordenado perante a OrderTag passada
   */
  public static orderProducts(
    products: Product[],
    order: OrderTag
  ) : Product[] {
    const sortedProducts = ToOrderProducts.orderTo(products, order.id);
    return sortedProducts;
  }

  public static productsWithOffers(
    products: Product[]
  ){
    const offertedProducts = products.filter((value) => {
      return value.price.from? true : false;
    });
    return offertedProducts;
  }

}