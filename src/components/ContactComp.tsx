import hi from '../images/hi.svg';
import { useState } from 'react';
import paperclip from '../images/paperclip.svg';
import {  motion } from 'framer-motion';


type Interest = "WEBSITE" | "LOGO AND BRANDING" | "UI/UX DESIGN" | "MOTION GRAPHICS" | "3D GRAPHICS" | "ML SOLUTIONS" | "DESIGN SOLUTIONS" | "WEB 3.0 DEVELOPMENT" | "MARKETING" | "OTHER";
type Budget = "500-1k" | "1k-5k" | "5-10k" | "10k-20k" | "20k-30k" | "30k-40k" | "40k-50k" | "50k-100k" | "100k+";

export const ContactComp = () => {

  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<Budget | "">("");

  const handleInterestClick = (value: Interest) => {
      setSelectedInterests(prevInterests => {
          if (!prevInterests.includes(value)) {
              return [...prevInterests, value];
          }
          return prevInterests;
      });
  };

    const handleBudgetClick = (value: Budget) => {
      setSelectedBudget(value);
    };

    const isSelected = (value: Interest | Budget, type: "interest" | "budget") => {
      if (type === 'interest') {
        return selectedInterests.includes(value as Interest);
      } else if (type === 'budget') {
        return selectedBudget === value;
      }
    };


    const onSubmit = async (event:any) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fc0e4be9-205f-439f-971e-b2847be0ec71");
  
      const object = Object.fromEntries(formData);
      console.log('formData: ',object);

      const json = JSON.stringify(object);

      console.log('json: ',json);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };


  console.log('interest2: ',selectedInterests);
  console.log('budget: ',selectedBudget);


  return (
    <>
      <div className="h-auto px-5 pb-10 sm:px-10 sm:pb-0 sm:pt-32 flex flex-col mb-32">
        <button className="w-[300px] h-[70px] text-4xl rounded-full font-glancyrRegular bg-transparent outline outline-black outline-1 text-black px-4 py-1">
          CONTACT US
        </button>
      </div>
      <div className="h-auto px-5 pb-10 sm:px-20 sm:pb-0 flex">
        <div className="flex flex-col w-[60%]">
          <div className="flex items-end gap-5">
            <img className="mb-5 w-[150px] sm:w-[212px]" src={hi.src} alt="" />
            <h1 className="text-black font-glancyrLight italic text-8xl">Tell us</h1>
          </div>
          <h1 className="text-black mb-8 font-glancyrLight italic text-8xl">everything.</h1>
          <form className="flex flex-col gap-4 mb-10" onSubmit={onSubmit}>
            {/* <div className="mb-16">
              <h3 className="text-black font-glancyrThin text-3xl mb-4">I'm interested in,</h3>
              <div className="flex gap-3 flex-col w-[65%]">
                <div className="text-left w-full gap-4 flex items-center font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleInterestClick("WEBSITE")}>
                    <input type="checkbox" name="interests" value="WEBSITE" hidden />
                    <BlackStyledButton text="WEBSITE" selected={isSelected("WEBSITE", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("LOGO AND BRANDING")}>
                    <input type="checkbox" name="interests" value="LOGO AND BRANDING" hidden />
                    <BlackStyledButton text="LOGO AND BRANDING" selected={isSelected("LOGO AND BRANDING", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("UI/UX DESIGN")}>
                    <input type="checkbox" name="interests" value="UI/UX DESIGN" hidden />
                    <BlackStyledButton text="UI/UX DESIGN" selected={isSelected("UI/UX DESIGN", 'interest')} />
                  </label>
                </div>
                <div className="text-left w-full gap-4 flex items-center font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleInterestClick("MOTION GRAPHICS")}>
                    <input type="checkbox" name="interests" value="MOTION GRAPHICS" hidden />
                    <BlackStyledButton text="MOTION GRAPHICS" selected={isSelected("MOTION GRAPHICS", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("3D GRAPHICS")}>
                    <input type="checkbox" name="interests" value="3D GRAPHICS" hidden />
                    <BlackStyledButton text="3D GRAPHICS" selected={isSelected("3D GRAPHICS", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("ML SOLUTIONS")}>
                    <input type="checkbox" name="interests" value="ML SOLUTIONS" hidden />
                    <BlackStyledButton text="ML SOLUTIONS" selected={isSelected("ML SOLUTIONS", 'interest')} />
                  </label>
                </div>
                <div className="text-left w-full gap-4 flex font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleInterestClick("DESIGN SOLUTIONS")}>
                    <input type="checkbox" name="interests" value="DESIGN SOLUTIONS" hidden />
                    <BlackStyledButton text="DESIGN SOLUTIONS" selected={isSelected("DESIGN SOLUTIONS", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("WEB 3.0 DEVELOPMENT")}>
                    <input type="checkbox" name="interests" value="WEB 3.0 DEVELOPMENT" hidden />
                    <BlackStyledButton text="WEB 3.0 DEVELOPMENT" selected={isSelected("WEB 3.0 DEVELOPMENT", 'interest')} />
                  </label>
                  <label onClick={() => handleInterestClick("MARKETING")}>
                    <input type="checkbox" name="interests" value="MARKETING" hidden />
                    <BlackStyledButton text="MARKETING" selected={isSelected("MARKETING", 'interest')} />
                  </label>
                </div>
                <div className="text-left w-full gap-4 flex font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleInterestClick("OTHER")}>
                    <input type="checkbox" name="interests" value="OTHER" hidden />
                    <motion.div
                      whileHover={{ color: '#b3e823', backgroundColor: '#070707', scale: 1.02 }}
                      className={`rounded-full w-full font-glancyrThin bg-transparent outline
                        outline-black outline-1 text-black px-4 py-1 ${isSelected("OTHER", 'interest') ? 'text-[#b3e823] bg-[#070707]' : ''}`}>
                      OTHER
                    </motion.div>
                  </label>
                </div>
              </div>
            </div> */}
            <input className="w-[50%] h-[50px] text-black font-glancyrThin text-xs sm:text-xl bg-transparent outline-none border-b border-black" type="text" placeholder="Your Name" />
            <input className="w-[50%] h-[50px] text-black font-glancyrThin text-xs sm:text-xl bg-transparent outline-none border-b border-black" type="email" placeholder="Your Email" />
            <input className="w-[50%] h-[50px] text-black font-glancyrThin text-xs sm:text-xl bg-transparent outline-none border-b border-black" type="text" placeholder="Tell us about your amazing project" />
            <div>
              <h3 className="text-black font-glancyrThin text-3xl mb-4">Your Budget (USD)</h3>
              {/* <div className="flex gap-3 mb-8 flex-col w-[65%]">
                <div className="text-left w-full gap-4 flex items-center font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleBudgetClick("500-1k")}>
                    <input type="radio" name="budget" value="500-1k" hidden />
                    <BlackStyledButton text="500-1k" selected={isSelected("500-1k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("1k-5k")}>
                    <input type="radio" name="budget" value="1k-5k" hidden />
                    <BlackStyledButton text="1k-5k" selected={isSelected("1k-5k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("5-10k")}>
                    <input type="radio" name="budget" value="5-10k" hidden />
                    <BlackStyledButton text="5-10k" selected={isSelected("5-10k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("10k-20k")}>
                    <input type="radio" name="budget" value="10k-20k" hidden />
                    <BlackStyledButton text="10k-20k" selected={isSelected("10k-20k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("20k-30k")}>
                    <input type="radio" name="budget" value="20k-30k" hidden />
                    <BlackStyledButton text="20k-30k" selected={isSelected("20k-30k", 'budget')} />
                  </label>
                </div>
                <div className="text-left w-full gap-4 flex items-center font-glancyrThin text-xs sm:text-xl">
                  <label onClick={() => handleBudgetClick("30k-40k")}>
                    <input type="radio" name="budget" value="30k-40k" hidden />
                    <BlackStyledButton text="30k-40k" selected={isSelected("30k-40k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("40k-50k")}>
                    <input type="radio" name="budget" value="40k-50k" hidden />
                    <BlackStyledButton text="40k-50k" selected={isSelected("40k-50k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("50k-100k")}>
                    <input type="radio" name="budget" value="50k-100k" hidden />
                    <BlackStyledButton text="50k-100k" selected={isSelected("50k-100k", 'budget')} />
                  </label>
                  <label onClick={() => handleBudgetClick("100k+")}>
                    <input type="radio" name="budget" value="100k+" hidden />
                    <BlackStyledButton text="100k+" selected={isSelected("100k+", 'budget')} />
                  </label>
                </div>
              </div> */}
              <div className="flex gap-2 w-[65%] ">
                {/* <label>
                  <input type="file" name="attachment" style={{ display: 'none' }} id="file-upload" />
                  <motion.div whileHover={{ color: '#b3e823', backgroundColor: '#070707', scale: 1.02 }} className="cursor-pointer">
                    <img src={paperclip.src} alt="paperclip" />
                  </motion.div>
                </label>
                <h2 className='flex items-center leading-3 text-black font-glancyrThin text-xl border-b border-solid border-black'>
                  Attach Document
                  <span className='opacity-40 text-xl leading-3'> &nbsp; (optional) </span>
                </h2> */}
                <button type='submit' data-cursor="pointer2" className="ml-5 btn border-none h-8 w-20 text-base sm:h-16 sm:w-[200px] text-center sm:text-4xl">
                  <div className="btn__bg border border-solid border-black">
                    <span className="btn__bg__layer btn__bg__layer-first"></span>
                    <span className="btn__bg__layer btn__bg__layer-second"></span>
                    <span className="btn__bg__layer btn__bg__layer-third"></span>
                  </div>
                  <span className="btn__text-out text-black font-glancyrThin">SEND</span>
                  <span className="btn__text-in text-black font-glancyrThin">SEND</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-[40%] outline outline-1 outline-black"></div>
      </div>
    </>
  );
};

type BlackStyledButtonProps = {
    text: string;
    selected?: boolean;
  }
  
  export const BlackStyledButton = ({ text, selected }: BlackStyledButtonProps) => {
    

  return (
    <motion.div
      whileHover={{ color: '#f7f7f7', backgroundColor: '#070707', scale: 1.02 }}
      className={`rounded-full font-glancyrThin bg-transparent outline outline-black outline-1 text-black px-4 py-1  ${selected ? 'text-[#b3e823] bg-[#070707] outline outline-1 outline-green ' : ''}`}
    >
      {text}
    </motion.div>
  );
    
  };
