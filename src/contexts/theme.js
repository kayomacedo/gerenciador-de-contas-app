import React,{createContext,useEffect,useState} from "react";
export const ThemeContext = createContext({});



function ThemeProvider({children}){

  const [themeAtual,setThemeAtual] = useState('darkmode');
  
  

  
 

    
    return(
        <ThemeContext.Provider value={{themeAtual}}>
            {children}
        </ThemeContext.Provider>    
    )
}

export default ThemeProvider;



