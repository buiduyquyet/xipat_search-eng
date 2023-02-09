import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navigator from './component/navigation';
import Opposite from './component/opposite';
import RelatedNouns from './component/relatedNouns';
import Rhyme from './component/rhyme';
import SearchBar from './component/searchBar';
import Synonymous from './component/synonymous';
import Homonym from './view/homonym';
import RelatedAdjectives from './view/relatedAdjectives';

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
