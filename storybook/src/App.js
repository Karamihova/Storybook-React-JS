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
  return (
    <>
      
      <Header/>
      <Home/>
      <Stories/>
      <Table/>
      <Login/>
      <Register/>
      <WriteStory/>
      <StoryDetails/>
      <Footer/>

    </>
  );
}

export default App;
