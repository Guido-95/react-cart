import React,{useContext,useReducer,useEffect} from 'react'
import reducer from './reducer'
import axios from "axios";
import{DATA_FETCHING_SUCCESS
    ,DATA_FETCHING_FAILED
    ,DATA_FETCHING_STARTED
    ,COSTO_TOTALE
    ,AUMENTA_QTY
    ,DIMINUISCI_QTY
    ,RIMUOVI_ITEM
    ,REMOVE_ALL_ITEM} from './action'
const AppContext = React.createContext();

 //URL per le chiamate all API
 const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";
   
 const initialState = {
    products:[],
    isLoading: false,
    isError: false,
}

function AppProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState);
    const aumentaQty = (id)=>{
        dispatch({type:AUMENTA_QTY,payload:id});
    }
    const diminusciQty = (id)=>{
        dispatch({type:DIMINUISCI_QTY,payload:id});
    }
    const removeItem = (id)=>{
        dispatch({type:RIMUOVI_ITEM,payload:id});
    }
    const removeAllItem = () => {
        dispatch({type:REMOVE_ALL_ITEM});
    }
    useEffect(()=>{
        (async()=>{
            try{
                dispatch({type:DATA_FETCHING_STARTED});
                const response  = await axios.get(url);
                dispatch({type:DATA_FETCHING_SUCCESS,payload:response.data.data});

            }
            catch(err){
                dispatch({type:DATA_FETCHING_FAILED});
            }
        })()
        
    },[]);
    useEffect(()=>{
        dispatch({ type: COSTO_TOTALE });
    },[state.products])
   

  return (
    <AppContext.Provider
    value={{...state,aumentaQty,diminusciQty,removeItem,removeAllItem}}>
        {children}
    </AppContext.Provider>
  )
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppProvider , useGlobalContext}