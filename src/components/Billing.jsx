import {bill,google,apple} from "../assets"
import styles, { layout } from "../Style";
const Billing = () => (
     <section id="product" className={`${layout.sectionReverse} mb-0`}>
         <div className={`${layout.sectionImgReverse}`}>
             <img src={bill} alt="Billing" className="w-[100%] h-[100%] z-5 relative"/>
             <div className="absolute z-0 w-[50%] h-[50%] white__gradient rounded-full top-0 -left-1/2"></div>
             <div className="absolute z-3 w-[50%] h-[50%] pink__gradient rounded-full bottom-0 -left-1/2"></div>
         </div>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} text-white `}>Easily Control Your <br/>Billing & Invoicing.</h2>
          <p className="text-gray-400 mb-[30px] max-w-[470px]">
           With the right credit card, you can improve your financial life by building credit,
           <br />earning rewards and saving money, but with hundreds of credit cards on the market.
         </p>
        <div className="flex gap-4">
           <img src={apple} alt="" />
           <img src={google} alt="" />
         </div>
       </div>
     </section>
)
  
  export default Billing;
  