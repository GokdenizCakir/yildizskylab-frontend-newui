import React, { useState } from "react";
import teams from "./../data/teams.json";
// import logo from "../assets/SkylabPinkLogo.png";

const Teams = () => {
  const [teamSelect, setTeamSelect] = useState(true);
  const [argeSelected, setArgeSelected] = useState(0);

  return (
    <section className="h-screen pt-36 bg-customDarkPurple white">
      <div className=" text-customLightPink text-2xl my-16 flex justify-center">
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
      <div>
        <div className="flex justify-center space-x-12">
          {(teamSelect ? teams.arge : teams.social).map((team, index) => {
            return (
              <div className="flex flex-col justify-between items-center space-y-8">
                <div
                  className={`w-[5.2rem] h-[5.2rem] flex justify-center items-center outline-customAccent ${
                    argeSelected === index ? "outline-8 outline" : null
                  } p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
                >
                  <img
                    onClick={() => setArgeSelected(index)}
                    src={require("../assets/" + team.logo)}
                    className="object-cover"
                    alt="logo"
                    key={index}
                  />
                </div>
                <div className="text-customLightPink text-end w-12 -rotate-45 ">
                  {team.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
