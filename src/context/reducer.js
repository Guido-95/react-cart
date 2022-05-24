import{DATA_FETCHING_SUCCESS
    ,DATA_FETCHING_FAILED
    ,DATA_FETCHING_STARTED
    ,COSTO_TOTALE, 
    DIMINUISCI_QTY
    , AUMENTA_QTY,
    RIMUOVI_ITEM,
    REMOVE_ALL_ITEM} from './action'

const reducer = (state , action)=>{

    if(action.type === DATA_FETCHING_STARTED ){
       return{
           ...state,
           isLoading:true,
           isError:false
       }
       
    }

    if(action.type === DATA_FETCHING_SUCCESS){
        return {
            ...state,
            isError:false,
            isLoading:false,
            products:action.payload.map((el)=>{
                return { ...el , qty:1}
            })
        }
    }

    if(action.type === DATA_FETCHING_FAILED){
        return {
            ...state,
            isError:true
        }
    }
    if(action.type === COSTO_TOTALE){
    
        return{...state,
            costoTotale:state.products.reduce((total,el)=>{
                return total + el.price * el.qty ;
            },0)
        }
    }
    if(action.type === AUMENTA_QTY){
        
        return{...state,
        products:state.products.map((el)=>{
            if(el._id === action.payload ){
                if(el.qty >= el.countInStock){
                    return {...el};
                }else{

                    return {...el,qty:el.qty + 1}
                }
            }else{
                return el;
            }
        })}
        
    }
    if(action.type === DIMINUISCI_QTY){
        
        return{...state,
        products:state.products.map((el)=>{
            if(el._id === action.payload ){
                if(el.qty <= 1 ){
                    return el;
                }else{

                    return {...el,qty:el.qty - 1}
                }
            }else{
                return el;
            }
        })}
        
    }

    if(action.type === RIMUOVI_ITEM){
        
        return {...state,
        products:state.products.filter((el)=>{
            return el._id !== action.payload;
        })}
      
        
    }

    if(action.type === REMOVE_ALL_ITEM){
       
        return {...state,
            products:[]}
      
        
    }
    return state;
}

export default reducer;


