
import './App.css';
import SideBar from './components/SideBar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <SideBar>
        <MainPage/>
      </SideBar>
    </div>
  );
}

export default App;
