import { useContext, useEffect, useState } from 'react';
import './home.css'
import { CoinContex } from '../../context/Coincontex';

function Home() {

  const {allCoin,currency}= useContext(CoinContex)
  const [displayCoin,setDisplayCoin]=useState([])
useEffect(()=>{
  setDisplayCoin(allCoin)
},[allCoin])

  return (
    <div className="home">
      <div className="hero w-[80%] m-auto text-left p-4">
        <h1 className="text-4xl font-semibold">
          Lagrest <br />{" "}
          <span className=" text-3xl text-zinc-800">Cryptomarket place</span>{" "}
        </h1>
        <h3 className="text-zinc-800 text-lg py-2">
         Our platform is the largest crypto coin search engine, offering
          comprehensive information on every cryptocurrency. Whether youre
          looking for details on market trends, coin specifications, or
          historical data, we provide all the essential insights to help you
          navigate the crypto world with confidence. Explore our extensive
          database to stay informed and make informed decisions in the dynamic
          world of digital currencies.
        </h3>

          <form className="flex justify-center py-4 gap-2">
            <input className=" text-black w-[50%] outline-none rounded p-1" type="text" placeholder="EG: bitcoin" />
            <button className=" bg-purple-800 p-2 rounded hover:bg-purple-600 " >Search</button>
          </form>
      </div>

      <div className="cryptoTable max-w-[800px] m-auto bg-gradient-to-r from-indigo-900 to-indigo-800 rounded">
        <div className="tablelayout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className='text-center'>24hr Change</p>
          <p className='text-right'>marketcap</p>
        </div>
        {
         displayCoin.slice(0,10).map((item,index)=>(
          <div className="tablelayout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className='flex items-center gap-1'>
                <img className='w-[35px]' src={item.image} alt={item.name} />
                <p>{item.name +" - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={`${item.price_change_percentage_24h<0 ? "text-red-700":"text-green-500"} font-semibold text-lg`}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className='text-right'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </div>
         ))
        }
      </div>
    </div>
  );
}

export default Home;
