import React from "react";
import Actor from "./Actor";

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export const ActorList = ({ label = "Cast and Crew", items }) => {
  return (
    <>
      {/* start cast and crew */}
      <div className="mt-12">
        <h1 className="font-semibold text-3xl tracking-wider mr-2">
          {label}
        </h1>
        {items && (
          <Carousel slidesPerPage={5} clickToChange>
            {items.map((actor, index) => (
              <Actor
                key={actor.id}
                name={actor.name}
                job={actor.job}
                character={actor.character}
                image={actor.profile_path}
              />
            ))}
          </Carousel>
        )}
      </div>
      {/* end cast and crew */}
    </>
  );
};

// export const ActorList = ({ actors }) => {
//   return (
//     <>
//       {/* start cast and crew */}
//       <div className="mt-12">
//         <h1 className="font-semibold text-3xl tracking-wider mr-2">
//           Cast and crew
//         </h1>
//         {actors && (
//           <div className="-ml-3 flex justify-between flex-wrap mt-5">
//             {actors.map((actor, index) => (
//               <Actor
//                 key={actor.id}
//                 name={actor.name}
//                 character={actor.character}
//                 image={actor.profile_path}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       {/* end cast and crew */}
//     </>
//   );
// };
