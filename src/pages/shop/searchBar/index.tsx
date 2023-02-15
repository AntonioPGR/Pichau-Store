import styles from './searchBar.module.scss';
import { useRef } from 'react';
import { CgSearch } from 'react-icons/cg';

interface PropsSearchBar{
  onChange: (query:string) => void
}

export function SearchBar({ onChange } : PropsSearchBar){
  // input de busca
  const searchInput = useRef<HTMLInputElement>(null);

  /*
   * Pega o valor inserido no input, caso exista, e passa para o componente superior 
  */
  const handleChange = () => {

    if(searchInput.current){
      onChange(searchInput.current.value);
    }

  };

  return (
    <form className={styles.container}>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder="Procurando por algo?"
        autoComplete="off"
        className={styles.input} 
        onChange={handleChange}
        ref={searchInput}
      />
      <CgSearch className={styles.icon} />
    </form>
  );
}