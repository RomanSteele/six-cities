import { useState } from 'react';
import { SortOptions } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSortOrder } from '../../store/slices/action-data/action-data';


function SortMenu(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentSortOption = useAppSelector(({ ACTION }) => ACTION.sortOrder);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={()=> setIsOpen(!isOpen)} className="places__sorting-type" tabIndex={0}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SortOptions.map((item) => (
          <li onClick={() => dispatch(updateSortOrder(item)) && setIsOpen(!isOpen)} className={`places__option ${currentSortOption === item ? 'places__option--active' : ''}`} tabIndex={0} key={item.concat('ID')}>{item}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortMenu;
