import React, {useRef, lazy, Suspense} from 'react';
import Loading from "./components/Loading/Loading.tsx";
import {fontCollection, GlobalStyle} from "./components/gobalStyles";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './components/gobalStyles'
import {useDayNightTheme} from "./context/ThemeProvider";
import {useOpenClose} from "./context/OpenCloseProvider";

const Nav = lazy(() => import('./components/Nav/NavBar/Nav.tsx'))
const Home = lazy(() => import('../src/components/Home/Home.tsx'))
const About = lazy(() => import('./components/About/About.tsx'))
const Works = lazy(() => import('./components/Works/Works.tsx'))
const Contact = lazy(() => import('./components/Contact/Contact.tsx'))
const BackToTop = lazy(() => import('./components/BackToTop/BackToTop.tsx'))
const Footer = lazy(() => import('./components/Footer/Footer.tsx'))

const App = () => {
  const scrollPosition = useScrollPosition()
  const {isDay, toggleTheme} = useDayNightTheme()
  const {isOpen, setOpen, toggleOpenClose} = useOpenClose()
  const toTop = useRef(null)
  if (toTop.current) {
    scrollPosition >= 400 ?
      toTop.current.classList.add('show-btn') :
      toTop.current.classList.remove('show-btn')
  }

  const Loader = () => <Loading/>
  const chosenTheme = isDay ? lightTheme : darkTheme

  return (
    <Suspense fallback={Loader()}>
      <ThemeProvider theme={{chosenTheme, fontCollection, isOpen}}>
        <GlobalStyle/>
        <Nav isDay={isDay}
             themeChange={toggleTheme}
             isOpen={isOpen}
             setOpen={setOpen}
             toggleOpenClose={toggleOpenClose}/>
        <Home/>
        <About/>
        <Works/>
        <Contact/>
        <BackToTop toTopRef={toTop}/>
        <Footer/>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;
