import { useContext } from "react";
import { CoinContex } from "../../context/Coincontex";

function Navbar() {
  const {setCurrency} =useContext(CoinContex)

  const currencyHandeler=(e)=>{
    switch (e.target.value){
      case "usd": {
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
      case "eur": {
        setCurrency({name:"eur",symbol:"€"});
        break;
      }
     

      default: {
        setCurrency({name:"usd",symbol:"$"});
        break;
      }

    }

  }

  return (
    <div className=" flex  items-center justify-between p-2 text-[#ddd]  border-b border-[#ddd] ">
      <img src="/src/assets/logo.png" alt="" />
      <ul className="flex gap-8  list-none text-lg font-semibold">
        <li className=" cursor-pointer">Features</li>
        <li className=" cursor-pointer">Home</li>
        <li className=" cursor-pointer">Pricing</li>
        <li className=" cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-3 ">
        <select onChange={currencyHandeler} className="text-white p-1 rounded-lg  bg-transparent border border-white outline-none">
       
          <option className=" bg-slate-600" value="usd">
            USD
          </option>
          <option className=" bg-slate-600" value="eur">
            EUR
          </option>
          
         
        </select>
        <button className="border border-white rounded-lg px-2 py-1 font-semibold hover:bg-white hover:text-black">
          SingUp
        </button>
      </div>
    </div>
  );
}

export default Navbar;
