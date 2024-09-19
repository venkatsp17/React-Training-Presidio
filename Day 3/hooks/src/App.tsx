import './App.css';
import AddItemForm from './components/additemform';
import Header from './components/header';
import TableView from './components/tableview';
import ListView from './components/tableview';
import { ItemContextProvider } from './context/ItemContext';

function App() {
  return (
  <ItemContextProvider>
    <>
      <Header/>
      <TableView/>
      <AddItemForm/>
    </>
  </ItemContextProvider>
  );
}

export default App;
