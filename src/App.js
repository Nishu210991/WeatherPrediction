import './App.css';
import Search from './components/search/search';
import Weather from './components/weather/weather';

function App() {

  const handleOnSerachChange = (searhData)=>{
    console.log(searhData);
  }

  return (
   <div className='container'>
   <Search onSearchChange={handleOnSerachChange}/>
   <Weather />
   </div>
  );
}

export default App;
