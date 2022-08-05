import './App.css';
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
          src={process.env.PUBLIC_URL+"assets/images/sporahero.jpg"}
          alt='SporaHeroIMG'
          />
      </div>
      <NavBar />
    </div>
  );
}
export default App;
