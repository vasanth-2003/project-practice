import message_icon from "../assets/meassage-icon.svg"
import loop_arrow from "../assets/loop-arrow.svg"
import paper_rocket from "../assets/paper-rocket-icon.svg"
import right_arrow from "../assets/right-arrow.svg"
import gift_card from "../assets/gift-card.svg"

const GiftCardSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 bg-white">
      {/* Top Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        
        {/* Left Content */}
        <div className="flex flex-col justifu-center items-start space-y-1 mt-4">
          <h1 className="text-4xl inter-font md:text-5xl lg:text-[58px] font-bold text-[#000000] leading-[1.15] ">
            Give the Gift of Support & Care
          </h1>
          <p className="text-[#5A566B] text-lg leading-relaxed max-w-lg inter-font">
            Surprise her with something meaningful. A MomMoment gift card 
            lets her choose the help she truly needs — from cleaning to 
            cooking and beyond.
          </p>
          <button className="inter-font mt-4 flex items-center gap-2 bg-[#6B5F9F] hover:bg-[#6456a3] text-white px-7 py-3.5 rounded-full font-medium transition-all duration-200 shadow-sm">
            Explore Gift Cards
            <img src={right_arrow}/>
          </button>
        </div>

        {/* Right Content - Gift Card Graphic (CSS Replica) */}
        <div className="w-full h-full flex flex-row justify-center items-center">
            <img src = {gift_card} />
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 lg:px-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#8C82CC4D] flex items-center justify-center mb-6 bg-white">
           
            <img src={paper_rocket}/>
          </div>
          <h3 className="text-xl font-bold text-[#2D2A3D] mb-3 inter-font">
            Instant Digital Delivery
          </h3>
          <p className="text-[#5A566B] leading-relaxed max-w-[280px] inter-font">
            Sent directly via email the moment you complete your purchase
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#8C82CC4D] flex items-center justify-center mb-6 bg-white">
            
            <img src = {message_icon}/>
          </div>
          <h3 className="text-xl font-bold text-[#2D2A3D] mb-3 inter-font">
            Add a Personal Message
          </h3>
          <p className="text-[#5A566B] leading-relaxed max-w-[280px] inter-font">
            Include a heartfelt note to make your gift even more special
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#8C82CC4D] flex items-center justify-center mb-6 bg-white">
            
            <img src ={loop_arrow} />
          </div>
          <h3 className="text-xl font-bold text-[#2D2A3D] mb-3 inter-font">
            Flexible Redemption
          </h3>
          <p className="text-[#5A566B] leading-relaxed max-w-[280px] inter-font">
            No expiration — redeem whenever help is needed most
          </p>
        </div>

      </div>
    </section>
  );
};

export default GiftCardSection;