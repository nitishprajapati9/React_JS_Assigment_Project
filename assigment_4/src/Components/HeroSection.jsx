// import SmartObjectSection from '../assests/smartObject.svg'
// import blueCloud from '../assests/blueCloud.svg'
// import largerPurple from '../assests/largerPurple.svg'
// export default function HeroSection() {
//   return (
//     <>
//        <div>
//         <img
//           src={largerPurple}
//           alt="Larger Purple"
//           className="absolute z-10 opacity-30 pb-6 mb-6"
//         />
//     <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] items-center gap-12 md:p-12">
      
//       {/* Left Section */}
//       <div className="flex justify-start items-start">

//         {/* Smart Object (normal size, in front) */}
//         <img 
//           src={blueCloud} 
//           alt="Blue Cloud"  
//           className='relative z-10 w-full h-auto opacity-50 scale-120'
//           />
//         {/* <img 
//           src={SmartObjectSection} 
//           alt="Smart Object" 
//           className="absolute -z-10 w-96"
//         /> */}
//         <img 
//           src={SmartObjectSection} 
//           alt="Smart Object" 
//           className="absolute z-20 w-96 h-auto left-20 bottom-10 "
//         />

    
//       </div>

//       {/* Right Section */}
//       <div className="flex space-x-6 justify-center md:justify-start">
//         hi
//       </div>
//     </div>
//        </div>

//     </>
//   );
// }
// // import SmartObjectSection from '../assests/smartObject.svg'
// // import blueCloud from '../assests/blueCloud.svg'

// // export default function HeroSection() {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] items-center gap-12 p-6 md:p-12">
      
// //       {/* Left Section */}
// //       <div className="relative flex justify-center items-center">
        
// //         {/* Blue Cloud as background */}
// //         <img 
// //           src={blueCloud} 
// //           alt="Blue Cloud"  
// //           className="w-full h-auto opacity-70"
// //         />

// //         {/* Smart Object centered inside Blue Cloud */}
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <img 
// //             src={SmartObjectSection} 
// //             alt="Smart Object" 
// //             className="h-auto"
// //           />
// //         </div>
// //       </div>

// //       {/* Right Section */}
// //       <div className="flex space-x-6 justify-center md:justify-start">
// //         hi
// //       </div>
// //     </div>
// //   );
// // }

// import SmartObjectSection from '../assests/smartObject.svg'
// import blueCloud from '../assests/blueCloud.svg'
// import largerPurple from '../assests/largerPurple.svg'

// export default function HeroSection() {
//   return (
//     <div className="relative">
//       {/* Larger Purple Background */}
//       <img
//         src={largerPurple}
//         alt="Larger Purple"
//         className="absolute z-0 opacity-30 bottom-0 top-0"
//       />

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] items-center gap-12 p-6 md:p-12">
        
//         {/* Left Section */}
//         <div className="relative flex justify-center items-center">
//           {/* Blue Cloud */}
//           <img 
//             src={blueCloud} 
//             alt="Blue Cloud"  
//             className="opacity-50"
//           />

//           {/* Smart Object perfectly centered inside */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <img 
//               src={SmartObjectSection} 
//               alt="Smart Object" 
//               className="h-auto"
//             />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex space-x-6 justify-center md:justify-start">
//           hi
//         </div>
//       </div>
//     </div>
//   );
// }

import SmartObjectSection from '../assests/smartObject.svg'
import blueCloud from '../assests/blueCloud.svg'
import largerPurple from '../assests/largerPurple.svg'
import lightBlue from '../assests/lightBlue.svg'

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Larger Purple Background */}
      <img
        src={largerPurple}
        alt="Larger Purple"
        className="absolute inset-0 z-0 opacity-30 left-0"
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] items-center gap-12 md:p-12 relative z-10">
        
        <div className="relative flex justify-center items-center bottom-0 left-0">
          <img 
            src={blueCloud} 
            alt="Blue Cloud"  
            className="absolute w-full opacity-50 left-0 sm:w-full md:w-full h-auto"
          />

          <div className="absolute inset-0 bottom-1 left-0">
            <img 
              src={SmartObjectSection} 
              alt="Smart Object" 
              className="w-96"  
            />
          </div>
        </div>

        <div className="relative">
          <div className='flex flex-col justify-center md:justify-start"'>
               <p className='text-5xl font-bold'>Mendleson</p>
          <p className='text-5xl font-bold'>Communication</p>
          <p className='text-5xl font-bold'>and Engagement</p>
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p> Malesuada sed ipsum, ut quam volutpat, tortor.</p>
          </div>

        </div>
      </div>
                <img className="absolute bottom-0 right-0 w-25 h-auto scale-110" src={lightBlue} />

    </div>
  )
}
