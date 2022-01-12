/* eslint-disable no-unused-vars */
import './App.css';
import CustomCursor from './components/CustomCursor/CustomCursor';
import HomePage from './views/HomePage/HomePage';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <CustomCursor />
      <HomePage />
      {/* <NotFoundPage /> */}
    </>
  );
}

export default App;
