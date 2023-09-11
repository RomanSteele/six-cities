import CardsList from "../../components/cards-list/cards-list";
import CitiesSortingTabs from "../../components/cities-sorting/cities-sorting";
import Header from "../../components/header/header";
import MainEmptyList from "../../components/main-emtpy-list/main-empty-list";
import MapComponent from "../../components/map-component/map-component";
import OptionsSorting from "../../components/options-sorting/options-sorting";


function MainPage ():JSX.Element {

  const properties = []

  return (
    <div className="page page--gray page--main">

      <Header/>

    <main className="page__main page__main--index">

        <CitiesSortingTabs/>

{properties.length < 1 ?

  <MainEmptyList/>

  :

      <div className="cities">
        <div className="cities__places-container container">

          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <OptionsSorting/>

            <CardsList properties={[]} listType={""}/>

          </section>

          <div className="cities__right-section">

            <MapComponent/>

          </div>
        </div>
      </div>
      }
    </main>
  </div>
  )

}
export default MainPage;
