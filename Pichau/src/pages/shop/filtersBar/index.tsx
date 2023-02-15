// COMPONENTS
import { Filter } from 'modules/filter';
import { OrderTag } from 'modules/orderTag';
import { Filters } from './filters';
import { OrderBy } from './orderBy';

// STYLES
import styles from './filtersBar.module.scss';

interface FiltersBarProps{
  onSelectFilter: (filter:Filter | undefined) => void,
  onChangeOrderBy: (order: OrderTag) => void
}

export function FiltersBar({onSelectFilter, onChangeOrderBy}:FiltersBarProps){
  return(
    <nav className={styles.container} >
      <Filters onSelect={onSelectFilter}/>
      <OrderBy onSelect={onChangeOrderBy}/>
    </nav>
  );
}