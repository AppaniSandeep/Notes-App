import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginForm from './components/LoginForm';
import Header from "./components/Header";
import NotesListView from "./components/NotesListView";
import Registration from "./components/Registration";


import './App.css';

const App = () => (
  <>
  <Router>
    <Routes>
       <Route exact path="/login" element={<LoginForm/>}/>
       <Route exact path="/notes-view" element = {<NotesListView/>}/>
       <Route exact path="/signup" element={<Registration/>}/>
       <Route exact path="/" element={<Header/>}/>
    </Routes>
  </Router>

  </>
)

export default App;
