import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import * as gameService from './services/storyService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Stories } from "./components/Stories/Stories";
import { StoryDetails } from "./components/StoryDetails/StoryDetails";
import { Table } from "./components/Table/Table";
import { WriteStory } from "./components/WriteStory/WriteStory";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setStories(result)
      })
  }, []);

  const onWriteStorySubmit = (data) => {

  }

  return (
    <>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stories' element={<Stories stories={stories} />} />
        <Route path='/table' element={<Table/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/write-story' element={<WriteStory/>} />
        <Route path='/story-details' element={<StoryDetails/>} />
      </Routes>

      <Footer/>

    </>
  );
}

export default App;
