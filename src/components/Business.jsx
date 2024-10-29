import Button from "./Button";
import styles, { layout } from "../Style";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content }) => (
  <div className={`flex flex-col sm:flex-row p-2 ss:p-6 rounded-[20px] bg-dimBlue gap-4 feature-card`}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1">
      <h4 className="text-white text-[20px] font-medium uppercase">{title}</h4>
      <p className="text-gray-400 mt-2">{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section id="business" className={`${layout.section} mt-10 mb-10`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-[20px]`}>
        You Do the Business,<br /> we'll handle the money.
      </h2>
      <p className="text-gray-400 mb-[30px] max-w-[470px]">
        With the right credit card, you can improve your financial life by building credit,
        <br />earning rewards and saving money, but with hundreds of credit cards on the market.
      </p>
      <Button />
    </div>

    <div className={`${layout.sectionImg} flex flex-col gap-6`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
