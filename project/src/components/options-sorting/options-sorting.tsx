import { useEffect, useState } from "react";
import { SortingOptions } from "../../const";
import { useAppSelector } from "../../hooks";
import { store } from "../../store";
import { updateSortingOption } from "../../store/slices/action-data/action-data";
import { useDetectClickOutside } from 'react-detect-click-outside';


function OptionsSorting(): JSX.Element{

  const [isOpen, setIsOpen] = useState(false);
 const { isCurrentSortingOption,isCurrentSortCity } = useAppSelector(({ACTION})=>ACTION);
 const ref = useDetectClickOutside({ onTriggered:()=> setIsOpen(false) })

  const listClickHandler = () => {
    setIsOpen(!isOpen)
  };

  const onOptionClickHandler = (option:string) => {
    store.dispatch(updateSortingOption(option))
    setIsOpen(false)
  };


  useEffect(()=>{
    setIsOpen(false)
    store.dispatch(updateSortingOption(SortingOptions[0]))
  },[isCurrentSortCity])


  return(
    <form className="places__sorting" action="#" method="get"ref={ref} >
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type"onClick={listClickHandler} >
      {isCurrentSortingOption}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {SortingOptions.map((option)=>
       <li className={`places__option ${isCurrentSortingOption === option?'places__option--active' : '' }`} key={option} onClick={()=>onOptionClickHandler(option)}>{option}</li>
      )}
    </ul>
  </form>
  )

}

export default OptionsSorting;
