// COMPONENTS
import { NotFound } from 'pages/notFound';

// STYLES
import styles from './productPage.module.scss';

// MODULES
import { Product } from 'modules/product';

// DATA
import productsJson from 'data/products.json';

// EXTERNAL
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export function ProductPage(){

  // Funções
  // busca o produto com id correspondente ou undefined caso não haja resultado para busca
  const findProductById = (productId:number) :Product | undefined => {
    
    const result = productsJson.find(item => item.id === productId);
    return result? Product.ConvertToProduct(result) : undefined;

  };

  // Retorna o produto a ser exibido na forma da classe ou undefined caso haja alguma informação errada
  const getProduct = () : Product | undefined => {
    // Verifica se há um State passado e se corresponde a um produto válido
    if(locationState && Product.isProduct(locationState)){
      return Product.ConvertToProduct(locationState as Product);
    }
    // Caso o State seja invalido tenta buscar pelo ID do produto, caso exista
    else if(paramsId){
      return findProductById(paramsId);
    }
    // Caso não atenda nenhuma das opções, seta product para undefined
    else {
      return undefined;
    }
  };
  
  // Variaves do componente
  const location = useLocation();
  const locationState = location.state || undefined;
  const params = useParams();
  const paramsId = Number(params.id) || undefined;
  const navigate = useNavigate();

  const [product] = useState<Product | undefined>(getProduct());

  // Caso product esteja indefinido, retorna uma pagina de notFound
  if(!product){
    return <NotFound />;
  }

  console.log(product);

  return(
    <div className={styles.container}>
      <div className={styles.backTo} onClick={()=>navigate(-1)} >Voltar</div>
      <div className={styles.mediaContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={'../../' + product.photo} alt={product.description} />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title} > {product.description} </h1>
          <div className={styles.price}>
            <p className={styles.fullPrice} > {product.getFormatedInCashPrice()} </p>
            <p className={styles.intallmentPrice} > {product.getFormatedIntallmentPrice()} parcelado em até 12x </p>
          </div>
          <button className={styles.addToCart} >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}