import './App.css';
import { NavBar } from './Components/AppBar/AppBar.stories';
import { Headline } from './Components/Headline/Headline';
import { HeadlineWindow } from './Components/Window/Window.stories';


function App() {

  const info = {
    headline: "Lyhyesti",
    text: "Olemme krapulatilaa tavoitteleva kotimainen järjestö joka toimii useimmiten päihtyneenä ja useimmiten pääkaupunkiseudun alueella. Paska, paskempi, paskin -palvelu on mottomme."
  }

  return (

      <div className="App">

        <div className="AppContainer">
          <div className="AppWrapper">
            {/* <div className='SporaHeroHeadlineContainer'> */}
            <HeadlineWindow h1={'JurriSpåra Ry'} />
            {/* </div> */}

            <div className="SporaHeroContainer">
              <div className="SporaHeroImgWrapper">
                <img className="SporaHero"
                  src={process.env.PUBLIC_URL + "assets/images/sporahero.jpg"}
                  alt='SporaHeroIMG'
                />
              </div>
            </div>
            <Headline info={info} />
            <NavBar />
          </div>
        </div>

      </div>
  );
}
export default App;
