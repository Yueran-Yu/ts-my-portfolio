import {NDThemeProps,FontProps } from "./components/gobalStyles";


declare module "styled-components" {
	export interface DefaultTheme {
			chosenTheme: NDThemeProps
			fontCollection:FontProps
			isOpen:boolean

	}
}
