import React,{createContext,useEffect,useState} from "react";
export const ModalContext = createContext({});



function ModalProvider({children}){

  const [isVisible,setIsVisible] = useState(false);
  const [minhasContas,setMinhasContas] = useState([]);
  
  const salvarNovaConta = (email,senha,titulo) => {

    setMinhasContas((prevContas) => {
        const newConta ={
            email: email,
            senha: senha,
            titulo: titulo
        }

        const allContas = [...prevContas];
        allContas.push(newConta);
   
        return allContas;
      });

     

  };

  
 

    
    return(
        <ModalContext.Provider value={{isVisible,minhasContas,salvarNovaConta}}>
            {children}
        </ModalContext.Provider>    
    )
}

export default ModalProvider;


