import { quotes } from "../assets";
import { feedback } from "../constants";
import styles, { layout } from "../Style";


const Testimonials = () => (
  <section className={`pt-10 flex flex-col relative `}>
<div className="absolute w-[60%] h-[60%] -right-[50%] top-[10%] z-0 rounded-full blue__gradient"></div>
   
    <div className="flex flex-1 sm:flex-row flex-col justify-between items-center ">
      <h2 className={`${styles.heading2} flex-1`}>What People are <b className="hidden ss:inline-block "/> Saying about us</h2>
      <p className={`${styles.paragraph} flex-1 `}>Everything you need to accept payments <br/> and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${layout.section} flex flex-wrap gap-5`}>
      {feedback.map((feedbackItem, index) => (
        <div
          key={feedbackItem.id}
          className={`flex flex-1 flex-col justify-evenly rounded-[20px] sm:px-5 px-2 sm:py-16 py-9 feedback-card 
            ${index === 1 ? 'feedback-2nd-card' : ''}`} // Apply hover styles by default to second card
        >
          <div className="sm:mx-6 mx-2 flex flex-col justify-evenly mb-4 gap-4">
            <img src={quotes} className="max-w-[32px] max-h-[32px]" alt="Quote Icon" />
            <p className="text-gray-50 font-normal text-[18px]">{feedbackItem.content}</p>
          </div>
          <div className="flex justify-evenly items-center">
            <img src={feedbackItem.img} className="max-w-[50px] max-h-[50px] rounded-full" alt="User Image" />
            <div>
              <h4 className="text-white">{feedbackItem.name}</h4>
              <p className="text-gray-600">{feedbackItem.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)
  
  export default Testimonials;
  