import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles, { layout } from "../Style";

const Clients = () => (
  <section className={` flex flex-wrap justify-around items-center mx-2`}>
    <img src={airbnb} className="w-[180px] h-[150px] object-contain hover:white" alt="Airbnb logo" />
    <img src={binance} className="w-[180px] h-[150px] object-contain" alt="Binance logo" />
    <img src={coinbase} className="w-[180px] h-[150px] object-contain" alt="Coinbase logo" />
    <img src={dropbox} className="w-[180px] h-[150px] object-contain" alt="Dropbox logo" />
  </section>
);

export default Clients;
