import React from 'react';
import './team.css'
import ResponsiveGrid from './teambox';
function Team() {
    return (
        <div className='team' id='team'>
            <h2>Our Team</h2>
            <div className='team_boxes'>
                <ResponsiveGrid />
            </div>
        </div>
    );
}

export default Team;