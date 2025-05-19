import React from 'react'
import './TeamCard.css'

const TeamCard = ({
    teamMemberImg,
    teamMemberName,
    teamMemberPost,
    className = ''
}) => {
    return (
        <div className={`team-member-card ${ className }`}>
            <div className="team-member-img">
                <img src={ teamMemberImg } alt="Team Member Image" />
            </div>
            <div className="team-member-name">{ teamMemberName }</div>
            <div className="team-member-position">{ teamMemberPost }</div>
        </div>
    )
}

export default TeamCard
