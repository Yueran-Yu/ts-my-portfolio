import * as React from 'react';

import {FC, createContext, useEffect, useContext, useState} from 'react';
import {DayNightProps, DayNightThemeProviderProps,} from "../type";

const DayNightThemeContext = createContext<DayNightProps>({
	isDay: true,
	toggleTheme: () => {}
})



const DayNightThemeProvider:FC<DayNightThemeProviderProps> = ({children}) => {
	const [isDay, setTheme] = useState(localStorage.getItem('dayMode') === 'true')

	useEffect(() => {
		localStorage.setItem('dayMode', JSON.stringify(isDay))
	}, [isDay])

	const toggleTheme = () => setTheme(!isDay)

	return (
		<DayNightThemeContext.Provider value={{isDay, toggleTheme}}>
			{children}
		</DayNightThemeContext.Provider>
	);
};

export const useDayNightTheme = () => {
	const {isDay, toggleTheme} = useContext(DayNightThemeContext)
	return {isDay, toggleTheme}
}

export default DayNightThemeProvider;
