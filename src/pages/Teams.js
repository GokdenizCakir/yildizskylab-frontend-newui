import React, { useState } from "react";
import teams from "./../data/teams.json";

const Teams = () => {
  const [teamSelect, setTeamSelect] = useState(true);

  return (
    <section className="h-screen pt-36 bg-customDarkPurple white">
      <div className=" text-customLightPink text-2xl my-12 flex justify-center">
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
      <div className="w-auto mx-36">
        <div>
          {teams.map((team, index) => {
            return(
              <div></div>
            )
          })}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Teams;
