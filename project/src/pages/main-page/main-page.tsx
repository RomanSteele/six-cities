import { useEffect } from "react";
import CardsList from "../../components/cards-list/cards-list";
import CitiesSorting from "../../components/cities-sorting/cities-sorting";
import Header from "../../components/header/header";
import MainEmptyList from "../../components/main-emtpy-list/main-empty-list";
import MapComponent from "../../components/map-component/map-component";
import OptionsSorting from "../../components/options-sorting/options-sorting";
import Spinner from "../../components/spinner/spinner";
import { CardsListType, Cities, MainMapSize } from "../../const";
import { sortPropertiesByOption } from "../../helpers";
import { useAppSelector } from "../../hooks";
import { store } from "../../store";
import { fetchHotelsAction } from "../../store/api-actions";
import { updateCurrentSortCity } from "../../store/slices/action-data/action-data";


function MainPage ():JSX.Element {

  const { hotels, favoriteHotels } = useAppSelector(({DATA})=>DATA);
  const { isCurrentSortCity, isCurrentSortingOption, isLoading } = useAppSelector(({ACTION})=>ACTION);

  const hotelsByCity = hotels.filter((hotel)=> hotel.city.name === isCurrentSortCity)
  const hotelsToRender = sortPropertiesByOption(isCurrentSortingOption, hotelsByCity);


  useEffect(()=>{
    store.dispatch(fetchHotelsAction())
  },[favoriteHotels])

  useEffect(()=>{
    store.dispatch(updateCurrentSortCity(Cities[0]));
  },[])


  if (isLoading && hotels.length<1 ) {
    return (
      <Spinner loading={isLoading} />
    );
  }

  return (
    <div className="page page--gray page--main">

      <Header/>

    <main className="page__main page__main--index">

        <CitiesSorting/>

    {hotelsToRender.length < 1 ?

      <MainEmptyList/>
  :
      <div className="cities">
        <div className="cities__places-container container">

          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{`${hotelsToRender.length} ${hotelsToRender.length === 1 ? 'place' : 'places' } to stay in ${isCurrentSortCity}`}</b>

            <OptionsSorting/>

            <CardsList properties={hotelsToRender} listType={CardsListType[1].title}/>

          </section>

          <div className="cities__right-section">

            <MapComponent properties={hotelsToRender} size={MainMapSize}/>

          </div>
        </div>
      </div>
      }
    </main>
  </div>
  )

}
export default MainPage;
