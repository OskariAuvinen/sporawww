import './App.css';
import heroIMG from './assets/images/sporahero.jpg';
import { NavBar } from './Components/AppBar/AppBar.stories';
import { HeadlineWindow } from './Components/Window/Window.stories';

function App() {
  return (
    <div className="App">
      {/* <div className='SporaHeroHeadlineContainer'> */}
        <HeadlineWindow h1={'JurriSpåra Ry'}/>
        {/* </div> */}
      <div className="SporaHeroContainer">
          <img className="SporaHero"
          src={heroIMG}
          alt='SporaHeroIMG'
          />
      </div>
      <NavBar />
    </div>
  );
}
export default App;
