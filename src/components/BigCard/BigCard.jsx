import React from "react";

export const BigCard = ({ image, name }) => {
    return (
      <div className="w-1/3 p-3 cursor-pointer transform hover:-translate-y-2 ease-in-out duration-200 transition-translate">
        <div>
          <div
            // width: 417,
            style={{ height: 225, borderRadius: 20 }}
            className="overflow-hidden relative"
          >
            <div
              className="w-full h-full absolute"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 1.53%, rgba(9, 9, 98, 0.8) 100%)"
              }}
            >
              <div className="relative w-full h-full text-2xl">
                <div className=" absolute left-0 bottom-0 p-4">
                  <h2 className="">{name}</h2>
                </div>
              </div>
            </div>
            <img
              className="h-full w-full  object-top object-cover"
              src={"https://image.tmdb.org/t/p/w500" + image}
              alt=""
            />
          </div>
        </div>
      </div>
    );
    
  };