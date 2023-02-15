// COMPONENTS
import { SearchBar } from './searchBar';
import { FiltersBar } from './filtersBar';
import { ProductsList } from 'components/products';

// MODULES
import { useEffect, useState } from 'react';
import { Filter } from 'modules/filter';
import { OrderTag } from 'modules/orderTag';
import { Product } from 'modules/product';
import { SearchFilter } from 'modules/searchFilter';

// DATA
import productsJson from 'data/products.json';

// UTILS
import { convertObjectsIntoProducts } from 'utils/jsonToProductArray';

export function Shop(){

  // FILTROS:
  // armazena a string de busca inserida na barra de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>('');
  // filtro selecionado na barra de filtros
  const [currentFilter, setCurrentFilter] = useState<Filter>();
  // ordem escolhida na barra de filtros
  const [order, setOrder] = useState<OrderTag>();

  // LISTA DE PRODUTOS
  // lista de produtos completa
  const [fullProductsList] = useState<Product[]>(() => convertObjectsIntoProducts(productsJson));
  // lista de produtos filtrada
  const [filteredProductsList, setFilteredProductsList] = useState<Product[]>(() => convertObjectsIntoProducts(productsJson));

  useEffect(() => {
    
    const filteredProducts = SearchFilter.filter(fullProductsList, currentFilter, searchQuery, order);
    setFilteredProductsList(filteredProducts);

  }, [searchQuery, currentFilter, order]);

  return (
    <>
      <SearchBar onChange={setSearchQuery}/>
      <FiltersBar onSelectFilter={setCurrentFilter} onChangeOrderBy={setOrder} />
      <ProductsList listProducts={filteredProductsList}/>
    </>
  );
}