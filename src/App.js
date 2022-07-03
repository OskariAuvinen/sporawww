import './App.css';
import heroIMG from './assets/images/sporahero.jpg';
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
    </div>
  );
}
export default App;
