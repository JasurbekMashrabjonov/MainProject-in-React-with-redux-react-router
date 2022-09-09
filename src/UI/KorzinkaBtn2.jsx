import React from 'react';
import {  useState } from "react";
import {useDispatch} from "react-redux"
import { getItem, remove } from '../redux/actions/actions';
function KorzinkaBtn2(props) {
    const {item} =props
    const [isBuy,setIsBuy] = useState(false)
    const [card2AddContent,setCard2AddContent] = useState("add_shopping_cart")
    const [card2ClassBuy,setCard2ClassBuy] = useState('blue')
    
    const dispatch = useDispatch()

   function f1(){

   
      if(isBuy){
        setCard2AddContent('check');
        setCard2ClassBuy('green');
        dispatch(getItem(item))
      }
      else{
        setCard2AddContent('add_shopping_cart');
        setCard2ClassBuy('blue')
        dispatch(remove(item))
      }
    }
    return (
        <>
             <a
                    href="#!"
                    id="buy"
                    className={`btn-floating waves-effect waves-light ${card2ClassBuy}`} 
                    onClick={()=>{
                      setIsBuy(!isBuy)
                    f1()
                    }}
                  >
                    <i className="material-icons buy">{card2AddContent}</i>
                         </a>
        </>
    );
}

export default KorzinkaBtn2;