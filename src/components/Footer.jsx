import { logo } from "../assets";
import styles, {layout} from "../Style"
import {footerLinks, socialMedia} from "../constants"

const Footer = () => (
     <section className="mt-10">
      
      <div className="flex flex-col md:flex-row w-full justify-between items-center mb-10">
        <div>
        <img src={logo} alt="Logo" className="mb-4"/>
        <p className={`${styles.paragraph} text-gray-400 font-normal text-[18px]`}>A new way to make payments Relaible ,<br></br> easy and secure.</p>
        </div>
        <div className="flex flex-1 flex-wrap mt-6 ml-6 w-full justify-between">
           {
            footerLinks.map((footerLink,index)=>(
              <div key={footerLink.id} >
                <h4 className="text-white">{footerLink.title}</h4>
                <ul className="list-none mt-4">
                  {
                    footerLink.links.map((Link,index)=>(
                      <li className=" text-gray-500 capitalize font-normal text-[18px] mb-1.5" key={Link.id}><a href={Link.link}>{Link.name}</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
           }
        </div>
        </div>      
        <div className="flex flex-wrap justify-between items-center border-t-[1px] border-gray-500 w-full mb-3 py-8 gap-y-4 ">
          <p className={`${styles.paragraph} font-normal text-[15px]`}>
            Copyright © 2024 soloBank. All Rights Reserved.
          </p>
          <ul className="flex gap-5 ">
            {socialMedia.map((social, index) => (
              <li key={social.id}>
                <img src={social.icon} alt={`${social.name} icon`} /> {/* Fixed src and added alt */}
              </li>
            ))}
          </ul>
       </div>

     </section>
     
)
  
  export default Footer;
  