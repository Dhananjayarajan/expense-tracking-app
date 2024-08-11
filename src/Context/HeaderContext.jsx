import React, { createContext, useContext } from 'react';

const HeaderContext = createContext();

export const useHeader = () => useContext(HeaderContext);

const HeaderProvider = ({ children }) => {
	const headerValue = {};

	return (
		<HeaderContext.Provider value={headerValue}>
			{children}
		</HeaderContext.Provider>
	);
};

export default HeaderProvider;
