import logo from './logo.svg';
import './App.css';
import MusicPlayer from './component/MusicPlayer';
import Header from './component/Header/Header';
import Song from './component/PlayList/Song';
import Player from './component/Player/Player';
import AudioPlayer from './component/Player/AudioPlayer';
import AudioBar from './component/Player/AudioBar';
import FileSearch from './component/FileSearch/FileSearch';
import Favorite from './component/PlayList/Favorite';

function App() {
  return (
    <div className="App p-3">
<div className='mb-5'>
<Header/>
   <FileSearch/>
   <AudioPlayer/>
   <Favorite/>
   <Song/>
   {/* <Player/> */}
</div>

<div>
<AudioBar/>
</div>
    </div>
  );
}

export default App;
