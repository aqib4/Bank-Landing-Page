import styles from "../Style"
import { arrowUp } from "../assets"
const Getstarted= ()=>(
         
      <div className={`w-[140px] h-[140px] p-[2px] bg-blue-gradient rounded-full ${styles.flexCenter}  md:ml-[100px] ss:mt-[-80px]`}>
           <div className={`bg-black w-[100%] ${styles.flexCenter} flex-col  h-[100%] rounded-full`}>
           <div className="flex flex-row items-center justify-between">
           <p className=" text-gradient font-semibold">Get</p>
           <img src={arrowUp} className={`w-[35px] h-[35px]`} alt="arrowup" /> 
           </div>
           <p className=" text-gradient font-semibold">Started </p>
           </div>
           
      </div>
)

export default Getstarted