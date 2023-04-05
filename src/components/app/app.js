import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';

import './app.css'
function App() {

  const data = [
    {name: "John", salary:300, increase:false, key: 1},
    {name: 'Baby', salary: 500, increase: true, key: 2},
    {name: "Holy", salary: 4000, increase: false, key: 3},
  ];

  return (
    <div className='app'>
      <AppInfo/>

      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployersList data={data}/>
    </div>
  );
}

export default App;