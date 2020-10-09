import React, { createContext, useState } from 'react';

export const TotalScoreContext = createContext([{}, () => { }])

export const TotalScoreProvider = ({ children }) => {
    const [state, setState] = useState({
        value: 0
    });

    return (
        <TotalScoreContext.Provider value={[state, setState]}>
            {children}
        </TotalScoreContext.Provider>
    );
}
