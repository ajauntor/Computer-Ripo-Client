import React from 'react';
import './TeamSection.css';
import TeamSectionInfo from '../TeamSectionInfo/TeamSectionInfo';


const teamData = [
    {
        name:'Luieh Mark',
        occupation: 'Senior Engneer',
        img:'https://www.localgrapher.com/wp-content/uploads/2019/06/Depositphotos_110466756_l-2015-400x400.jpg'
    },
    {
        name:'Liza zenia',
        occupation: 'CEO',
        img:'https://bpconf.com/wp-content/uploads/profile/961.jpg'
    },
    {
        name:'Manager',
        occupation: 'Senior Director',
        img:'https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/julia-mccoy-crop-5f1af612651ef-400x400.jpg'
    }
]

const TeamSection = () => {
    return (
        <section style = {{marginTop:'180px'}}>
            <div className="container ">
            <h1 style={{fontWeight:'bold'}} className="text-center ">MEET OUR TEAM</h1>
            <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, unde.</p>
            <div className="row d-flex justify-content-center">
                {
                    teamData.map(team => <TeamSectionInfo team={team}  />)
                }
            </div>
        </div>
        </section>
    );
};

export default TeamSection;