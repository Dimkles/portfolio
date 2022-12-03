import { FC, useEffect, useRef } from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import { parallaxinit } from './service/parallax';
import { useCheckAuthMutation } from './service/RTK/UserService';
import './style/App.scss'

const App: FC = () => {
  const refApp = useRef(null)
  useEffect(() => {
    parallaxinit(refApp.current)
  }, [refApp])

  const [checkAuth,] = useCheckAuthMutation()

  const checkAuthHandler = async () => {
    try {
      if (localStorage.getItem('token')) {
        const data = await checkAuth('').unwrap()
        if (data.token) {
          localStorage.setItem('token', data.token)
        }
      }
    } catch (error) { }
  }
  useEffect(() => {
    checkAuthHandler()
  }, [])
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