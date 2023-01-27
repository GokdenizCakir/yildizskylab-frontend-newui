import React, { useState } from "react";

const Teams = () => {
  const [teamSelect, setTeamSelect] = useState(true);

  return (
    <section className="h-screen pt-48 bg-customDarkPurple white">
      <div className=" text-customLightPink text-xl mt-5 flex justify-center">
        <div className="flex justify-between w-auto items-center">
          <div
            onClick={() => setTeamSelect(true)}
            className={`px-3 pt-[0.2rem] pb-[0.1rem] cursor-pointer leading-tight  ${
              teamSelect ? "bg-customAccent" : "bg-customDarkPurple"
            } `}
          >
            ARGE EKİPLERİ
          </div>
          <div
            onClick={() => setTeamSelect(false)}
            className={`px-3 pt-[0.2rem] py-[0.1rem] cursor-pointer ${
              !teamSelect ? "bg-customAccent" : "bg-customDarkPurple"
            } `}
          >
            SOSYAL EKİPLER
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
