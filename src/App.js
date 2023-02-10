import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navigator from './component/navigation';
import SearchBar from './component/searchBar';
import Homonym from './view/homonym';
import Opposite from './view/opposite';
import RelatedAdjectives from './view/relatedAdjectives';
import RelatedNouns from './view/relatedNouns';
import Rhyme from './view/rhyme';
import Synonymous from './view/synonymous';

function App() {
  return (
    <div className="App">
      <h1>World <span>Search</span></h1>
      <Navigator />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homonym' element={<Homonym />} />
        <Route path='/synonymous' element={<Synonymous />} />
        <Route path='/opposite' element={<Opposite />} />
        <Route path='/related-adj' element={<RelatedAdjectives />} />
        <Route path='/related-nou' element={<RelatedNouns />} />
        <Route path='/rhyme' element={<Rhyme />} />
      </Routes>
    </div>
  );
}

export default App;
