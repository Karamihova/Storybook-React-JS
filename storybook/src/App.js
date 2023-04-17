import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import * as storyService from './services/storyService';
import * as authService from './services/authService';
import {AuthContext} from './contexts/AuthContext';

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
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    storyService.getAll()
      .then(result => {
        setStories(result)
      })
  }, []);

  const onWriteStorySubmit = async (data) => {
    console.log(data);
    const newStory = await storyService.create(data);

    setStories(state => [...state, newStory]);
    navigate('/stories');
  };

  const onLoginSubmit = async (data) => {
    const {email, password} = data;
    try {
      const result = await authService.login(email, password);
      setAuth(result);
      navigate('/');
    } catch (error) {
      console.log('problem!!!')
    }
  };

  const onRegisterSubmit = async (data) => {
    const {email, password, rePassword} = data;
    try {
      const result = await authService.register(email, password, rePassword);
      setAuth(result);
      navigate('/');
    } catch (error) {
      console.log('problem!!!')
    }
  }

  return (
    <AuthContext.Provider value={{onLoginSubmit, onRegisterSubmit, isAuthenticated: auth.accessToken ? true : false}}>
      <>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stories' element={<Stories stories={stories} />} />
        <Route path='/table' element={<Table/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/write-story' element={<WriteStory onWriteStorySubmit={onWriteStorySubmit} />} />
        <Route path='/stories/:storyId' element={<StoryDetails/>} />
      </Routes>

      <Footer/>

      </>
    </AuthContext.Provider>  
  );
}

export default App;
