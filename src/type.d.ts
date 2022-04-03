import React, {ReactNode, RefObject} from "react";

export interface OpenCloseProps {
	isOpen: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	toggleOpenClose: () => void
}

export interface DayNightProps {
	isDay: boolean
	toggleTheme: () => void
}

export interface DayNightThemeProviderProps {
	children: ReactNode
}

export interface BackToTopProps {
	toTopRef:  RefObject<HTMLAnchorElement>
}