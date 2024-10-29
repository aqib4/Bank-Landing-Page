import styles, { layout } from "../Style";
import Button from "./Button"

const CTA = () => (
  <section className={`${layout.section} justify-between mt-8 items-start sm:items-center ${styles.paddingX} rounded-[20px] bg-black-gradient-2  featured-card`}>
    <div className="mb-4 sm:mb-0">
      <h2 className={`${styles.heading2} text-white `}>
        Let's Try Our Services Now!
      </h2>
      <p className={`${styles.paragraph} text-gray-500`}>
        Everything you need to accept payments
        <br className="sm:inline-block hidden" /> and grow your business anywhere on the planet.
      </p>
    </div>
    <div>
        <Button/>
    </div>
  </section>
);

export default CTA;
