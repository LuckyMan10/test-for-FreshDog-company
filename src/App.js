import './App.css';
import { useSelector } from 'react-redux';
import { List } from './components';
import { listSelector } from './redux/selectors';
import { AddForm } from './components';
import { setListItem } from './redux/actions';
import { removeListItem } from './redux/actions';

function App() {
  const listData = useSelector(listSelector);

  return (
    <div className="App">
      <div className="App__title">
        <h1>Fresh dog list</h1>
      </div>
        <AddForm data={listData} setListItem={setListItem}/>
        <List data={listData} removeListItem={removeListItem}/>
    </div>
  );
}

export default App;
