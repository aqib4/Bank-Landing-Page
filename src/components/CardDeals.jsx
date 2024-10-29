import {card} from "../assets"
import styles, { layout } from "../Style";
import Button from "./Button";

const CardDeal = () => (
 <section className={`${layout.section} gap-6`}>
     <div >
     <h2 className={`${styles.heading2} text-white`}>Find  a better card deal <br className="hidden sm:inline-block"
 />in a few easy steps.</h2>
          <p className="text-gray-400 mb-[30px] max-w-[470px]">
           With the right credit card, you can improve your financial life by building credit,
           <br />earning rewards and saving money, but with hundreds of credit cards on the market.
         </p>
         <Button/>
     </div>
     <div className="flex-1">
      <img src={card} alt="" />
     </div>
 </section>
)
  
  export default CardDeal;
  