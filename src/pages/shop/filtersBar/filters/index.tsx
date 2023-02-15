import preSetFilters from 'data/filters.json';
import { Filter } from 'modules/filter';
import { ChangeEvent } from 'react';

import styles from './filters.module.scss';
import filterStyles from '../filtersBar.module.scss';
import classNames from 'classnames';

// OBS: para o estilo usei o checkbox, porém existe um módulo chamado ClassNames que pode ser usado para concaternar classes do css modules

export interface PropsFilters{
  onSelect: (filter:Filter | undefined) => void,
}

export function Filters({ onSelect }:PropsFilters){
  const filters = preSetFilters.map((value)=>{
    return new Filter(value.name, value.id); 
  });

  /*
    * Desmarca as outras opções caso não seja a selecionada 
  */
  const uncheckOthersOptions = (selectedOption:Filter) => {

    const nodeListInputs = document.getElementsByName('filter'); 
    const inputs : HTMLInputElement[] = Array.prototype.slice.call(nodeListInputs);

    inputs.map((prevCheckBox) => {

      if(prevCheckBox.id !== String(selectedOption.id) && prevCheckBox.checked){
        prevCheckBox.checked = false;
      }

    });

  };

  const handleSelect = (ev:ChangeEvent<HTMLInputElement>, selectedFilter:Filter) => {
    if(ev.target.checked){
      uncheckOthersOptions(selectedFilter);
      onSelect(selectedFilter);
    } else {
      onSelect(undefined);
    }
  };

  /*
    * @returns uma div para cada elemento contido em filters
  */
  const renderFilters = () => {
    return filters.map((filter, index) => {
      return(
        <li key={index} className={ classNames({
          [styles.filter]: true,
          [filterStyles.filterElement]: true,
        })} 
        >
          <input 
            type="checkbox" 
            name="filter" 
            id={String(filter.id)} 
            className={styles.checkBox} 
            onChange={(ev) => handleSelect(ev, filter)}
          />
          <label 
            htmlFor={String(filter.id)} 
            className={styles.name}> {filter.name} 
          </label>
        </li>
      );
    });
  };

  return (
    <ul className={styles.list} >
      {renderFilters()}
    </ul>
  );
}