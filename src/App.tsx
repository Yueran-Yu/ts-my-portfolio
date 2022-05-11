import * as React from 'react';
import {useRef, lazy, Suspense, FC} from 'react';
import {Loading} from "./components/Loading/Loading";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {fontCollection, GlobalStyle,lightTheme, darkTheme} from './components/gobalStyles';
import {useDayNightTheme} from "./context/ThemeProvider";
import {useOpenClose} from "./context/OpenCloseProvider";
const Nav = lazy(() => import('./components/Nav/NavBar/Nav'))
const Home = lazy(() => import('../src/components/Home/Home'))
const About = lazy(() => import('./components/About/About'))
const Works = lazy(() => import('./components/Works/Works'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const BackToTop = lazy(() => import('./components/BackToTop/BackToTop'))
const Footer = lazy(() => import('./components/Footer/Footer'))


const App:FC = () => {
  const scrollPosition = useScrollPosition()
  const {isDay, toggleTheme} = useDayNightTheme()
  const {isOpen, setOpen, toggleOpenClose} = useOpenClose()
  const toTop = useRef<HTMLAnchorElement>(null)

  if (toTop.current && toTop.current) {
    scrollPosition >= 400 ?
			(toTop.current as HTMLAnchorElement).classList.add('show-btn') :
			(toTop.current as HTMLAnchorElement).classList.remove('show-btn')
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
