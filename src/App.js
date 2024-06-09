import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddTodo/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/delete' element={<Delete/>}/>
  <Route path='/view' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
