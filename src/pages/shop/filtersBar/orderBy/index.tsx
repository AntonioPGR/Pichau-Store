import styles from './orderBy.module.scss';
import filterStyles from '../filtersBar.module.scss';
import orders from 'data/orders.json';
import { OrderTag } from 'modules/orderTag';
import { useEffect } from 'react';
import classNames from 'classnames';

export interface PropsOrderBy{
  onSelect: (tag:OrderTag) => void;
}

export function OrderBy({onSelect}:PropsOrderBy){

  const options = orders.map((value)=>{
    return new OrderTag(value.name, value.id);
  });

  /* seta a ordem inicial como o primeiro elemento do array */
  useEffect(()=>{
    onSelect(options[0]);
  }, []);

  /* Passa a ordem selecionada para o elemento pai */
  const handleChange = (ev:React.ChangeEvent<HTMLSelectElement>) => {

    const selectedId = Number(ev.target.value);
    const event = options.filter((value)=>{
      return value.id === selectedId;
    });
    onSelect(event[0]);

  };


  return(
    <div className={
      classNames({
        [filterStyles.filterElement]: true,
        [styles.container]: true
      })
    }>
      <label className={styles.name} htmlFor="orderBy">Organizar por:</label>
      <select className={styles.select} name="orderBy" onChange={(ev) => handleChange(ev)}>
        {
          options.map((value, index) => {
            return <option className={styles.option} key={index} value={String(value.id)} > {value.name} </option>;
          })
        }
      </select>
    </div>
  );
}