import SmartObjectSection from '../assests/smartObject.svg'
import blueCloud from '../assests/blueCloud.svg'
import largerPurple from '../assests/largerPurple.svg'
import lightBlue from '../assests/lightBlue.svg'

export default function HeroSection() {
  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Larger Purple Background */}
      {/* <img
        src={largerPurple}
        alt="Larger Purple"
        className="absolute inset-0 z-0 opacity-30 left-0"
      /> */}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] items-center gap-12 md:p-12 relative z-10">
        
        <div className="relative flex justify-center items-center bottom-0 left-0">
          {/* <img 
            src={blueCloud} 
            alt="Blue Cloud"  
            className="absolute w-full opacity-50 left-0 sm:w-full md:w-full h-auto"
          /> */}

          {/* <div className="absolute inset-0 bottom-1 left-0">
            <img 
              src={SmartObjectSection} 
              alt="Smart Object" 
              className="w-96"  
            />
          </div> */}
        </div>

        <div className="relative">
          <div className='flex flex-col justify-center md:justify-start"'>
               <p className='text-6xl font-bold'>Mendleson</p>
          <p className='text-6xl font-bold'>Communication</p>
          <p className='text-6xl font-bold'>and Engagement</p>
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p> Malesuada sed ipsum, ut quam volutpat, tortor.</p>
          </div>

        </div>
      </div>
        <img className="absolute bottom-0 right-0 w-25 h-auto" src={lightBlue} />
        <img src={SmartObjectSection} alt="Smart Object" className="absolute z-50 bottom-0 left-10"/>
        <img src={largerPurple} alt="Larger Purple" className="absolute z-30 bottom-0 left-0"/>
        <img src={blueCloud} alt="Blue Cloud"  className="absolute z-20 bottom-0 left-0"/>
    </div>
  )
}
