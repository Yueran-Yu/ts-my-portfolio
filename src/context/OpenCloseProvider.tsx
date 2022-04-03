import * as React from 'react';
import {FC, useState, createContext, useContext, useCallback, ReactNode} from 'react';
import {OpenCloseProps} from "../type";


const OpenCloseContext = createContext<OpenCloseProps>({
	isOpen: false,
	setOpen: () => {},
	toggleOpenClose: () => {}
})

export const OpenCloseProvider: FC<ReactNode> = ({children}) => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const toggleOpenClose = useCallback(() => setOpen(!isOpen), [isOpen])

	return (
		<OpenCloseContext.Provider value={{isOpen, setOpen, toggleOpenClose}}>
			{children}
		</OpenCloseContext.Provider>
	)
}

export const useOpenClose = () => {
	const {isOpen, setOpen, toggleOpenClose} = useContext(OpenCloseContext)
	return {isOpen, setOpen, toggleOpenClose}
}