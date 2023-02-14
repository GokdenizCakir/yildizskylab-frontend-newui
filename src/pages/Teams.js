import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import teams from './../data/teams.json';
import DownArrow from '../components/DownArrow';

const Teams = forwardRef(function Teams(props, ref) {
  const pageRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        pageRef.current.scrollIntoView();
      },
    };
  });

  const [teamSelect, setTeamSelect] = useState('arge');
  const [teamIndex, setTeamIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState('algolab');

  return (
    <section
      className='h-screen snap-start relative pt-24 lg:pt-36 bg-customDarkPurple white'
      ref={pageRef}
    >
      <div className=' text-customLightPink text-xl tracking-wide lg:text-2xl my-10 lg:my-16 flex justify-center'>
        <div className='flex justify-between w-auto items-center'>
          <div
            onClick={() => {
              setTeamSelect('arge');
              setTeamIndex(0);
              setSelectedTeam('algolab');
            }}
            className={`px-3 pt-[0.2rem] pb-[0.1rem] cursor-pointer leading-tight ${
              teamSelect === 'arge' ? 'bg-customAccent' : 'bg-customDarkPurple'
            } `}
          >
            ARGE EKİPLERİ
          </div>
          <div
            onClick={() => {
              setTeamSelect('social');
              setTeamIndex(0);
              setSelectedTeam('organizasyon');
            }}
            className={`px-3 pt-[0.2rem] py-[0.1rem] cursor-pointer ${
              teamSelect === 'social'
                ? 'bg-customAccent'
                : 'bg-customDarkPurple'
            } `}
          >
            SOSYAL EKİPLER
          </div>
        </div>
      </div>
      <div>
        <div className='h-[150px] lg:h-50 flex justify-start lg:justify-center pl-10 pr-10 lg:pl-0 w-screen overflow-x-scroll lg:overflow-x-visible space-x-12'>
          {(teamSelect === 'arge' ? teams.arge : teams.social).map(
            (team, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col justify-center lg:justify-between items-center space-y-8'
                >
                  <div
                    onClick={() => {
                      setTeamIndex(index);
                      setSelectedTeam(team.name);
                    }}
                    className={`w-16 lg:min-w-[5.2rem] h-16 lg:min-h-[5.2rem] flex justify-center items-center ring-customAccent ${
                      teamIndex === index ? 'ring-8' : null
                    } p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
                  >
                    <img
                      src={require('../assets/' + team.logo)}
                      className='object-cover w-[3.2rem] hue-rotate-[320deg] brightness-[0.2]'
                      alt='logo'
                    />
                  </div>
                  <div className='text-customLightPink text-xs lg:text-lg text-end w-10 -rotate-45 '>
                    {team.name}
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className='w-screen text-sm lg:text-md flex mt-10 lg:mt-28 justify-center'>
          <div className='font-inter w-11/12 lg:w-1/2 text-center'>
            {
              teams[teamSelect].find((team) => team.name === selectedTeam)
                .details
            }
          </div>
        </div>
      </div>
      <DownArrow />
    </section>
  );
});

export default Teams;
