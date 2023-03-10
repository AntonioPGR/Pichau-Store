// COMPONENTS:
import { Product } from 'modules/product';
import { memo } from 'react';
import { ProductContainer } from './product';

// STYLE:
import styles from './products_list.module.scss';

interface PropsProductsList{
  listProducts: Product[] | undefined
}

function ProductsList({listProducts}:PropsProductsList){
  /**
   * renderiza a lista de produtos passada
   * @returns lista de produtos renderizada de acordo com os filtros
   */
  const renderProducts = () => { 

    if(!listProducts){
      return <div className={styles.warningMessage} >Pelo visto estamos sem nada no estoque... ou será que ocorreu algum erro? </div>;
    }

    if(listProducts.length === 0){
      return <div className={styles.warningMessage} > Nenhum produto encontrado </div>;
    }
    
    // retorna os elementos renderizados
    return listProducts?.map((value)=>{
      return (
        <ProductContainer key={value.id} productInfo={value} />
      );

    });

  };

  return(
    <div className={styles.container}>
      {
        renderProducts()
      }
    </div>
  );
}

export default memo(ProductsList);