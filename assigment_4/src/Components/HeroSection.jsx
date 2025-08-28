import SmartObjectSection from '../assests/smartObject.svg'
import blueCloud from '../assests/blueCloud.svg'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-6 md:p-12">
      
      {/* Left Section */}
      <div className="relative flex justify-start items-center">
        <img 
          src={blueCloud} 
          alt="Blue Cloud" 
          className="absolute -z-10 w-[1000px] h-auto top-0 left-0 opacity-30"
        />

        {/* Smart Object (normal size, in front) */}
        <img 
          src={SmartObjectSection} 
          alt="Smart Object" 
          className="relative z-10 w-96 h-auto "
        />
      </div>

      {/* Right Section */}
      <div className="flex space-x-6 justify-center md:justify-start">
        hi
      </div>
    </div>
  );
}
