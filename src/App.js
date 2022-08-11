import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


import { HomePage } from './components/home/home.component';
import { WordModal } from './components/word-modal/word-modal.component';

const App = () => {

  let location = useLocation();
  let background = location.state && location.state.background;

  return (<>
    <Switch location={background || location}>
     <Route exact path="/" children={<HomePage />} />
    </Switch>
    {background && <Route path="/:word" children={<WordModal />}/>}
   </>)
  
}

export default App;
