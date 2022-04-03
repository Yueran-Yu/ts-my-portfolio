import {NDThemeProps,FontProps } from "./src/components/gobalStyles";


declare module "styled-components" {
	export interface DefaultTheme {
			chosenTheme: NDThemeProps
			fontCollection:FontProps
			isOpen:boolean

	}
}
