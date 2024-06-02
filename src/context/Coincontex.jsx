/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

 export const CoinContex= createContext()


const CoinContexprovider=(props)=>{
    const [allCoin,setAllCoin]=useState([])
    const[currency,setCurrency]=useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllcoin=()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-EytdJ6vFDHa3Y8kmTWtiKnJc'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchAllcoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currency])

    const contextValue={
        allCoin,currency,setCurrency
    }
return(
    <CoinContex.Provider value={contextValue}>
   
        {props.children}
    </CoinContex.Provider>
)
}

export default CoinContexprovider;