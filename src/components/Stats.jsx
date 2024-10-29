import styles from "../Style";
import { stats } from '../constants';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap `}>
    {stats.map((stat, index) => (
      <div 
        key={stat.id} 
        className={`flex flex-wrap sm:flex-row ss:items-baseline ${styles.flexCenter} ${index !== stats.length - 1 ? "ss:mr-5 mr-1" : ""}`}
      >
        <h4 className="font-poppins font-semibold text-white md:text-[40px] text-[30px] leading-relaxed">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-gradient sm:text-[20px] text-[16px] xs:text-[18px] leading-relaxed ml-2">
          {stat.title}
        </p>
        
        {/* Only show the pipe if it is not the last element */}
        {index !== stats.length - 1 && (
          <span className="text-gray-400 ml-4 ss:inline-block hidden">|</span>
        )}
      </div>
    ))}
  </section>
);

export default Stats;
