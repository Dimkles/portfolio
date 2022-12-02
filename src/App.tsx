import { FC, useEffect, useRef } from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import { parallaxinit } from './service/parallax';
import './style/App.scss'

const App: FC = () => {
  const refApp = useRef(null)
  useEffect(() => {
    parallaxinit(refApp.current)
  }, [refApp])

  return (
    <div ref={refApp} className='app'>
      <div className='app__bg'></div>
      <div className="app__content">
        <Header />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;