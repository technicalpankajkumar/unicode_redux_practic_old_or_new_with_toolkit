import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import ShowPosts from './components/ShowPosts';
import ReduxThunk from './ReduxThunk';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReduxThunk/>}/>
          {/* <Route path='/post' element={<><Posts /><ShowPosts/></>} />
          <Route path='/post/show_posts' element={<ShowPosts />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
