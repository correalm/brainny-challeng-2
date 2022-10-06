import { createContext, useState, useContext } from 'react'
import { buildRecords } from '../utils/buildRecords'

const ClientsContext = createContext()

export const ClientsContextProvider = ({ children }) => {
  const [clients, setClients] = useState(buildRecords(10)) 
	const [currentClient, setCurrentClient] = useState(null)
	


	return (
		<ClientsContext.Provider
			value = {{ 
				currentClient, 
				setCurrentClient,
        clients, 
        setClients 
			}}
		>
			{ children }
		</ClientsContext.Provider>
	)
}

export function useClientsContext() {
	return useContext(ClientsContext)
}