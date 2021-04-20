import React from 'react';


const TeamSectionInfo = ({ team }) => {
    return (
        <div className="col-md-4 mt-5">
            <img style={{borderRadius:"50%", height:"200px", justifyContent:"center"}} src={team.img} alt="" />
            <div className="member-name text-center ">
                <div className="mamber-inner text-center">
                    <h5>{team.name}</h5>
                    <h6>{team.occupation}</h6>
                </div>
            </div>
        </div>
    );
};

export default TeamSectionInfo;