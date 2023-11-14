import React, { useState } from 'react';
import '../style/index.css';

function Sidebar() {
    const [showTimeline, setShowTimeline] = useState(false);
    const [showBoard, setShowBoard] = useState(false);

    const handleToggleTimeline = () => {
        setShowTimeline(!showTimeline);
        setShowBoard(false); // Close the board when toggling the timeline
    };

    const handleToggleBoard = () => {
        setShowBoard(!showBoard);
        setShowTimeline(false); // Close the timeline when toggling the board
    };

    return (
        <sidebar>
            <div className='side-bar-top'>
                <div className='side-bar-buttons-top'>
                    <button onClick={handleToggleTimeline}>v</button>
                    <div className='planning-section'>
                        <p>PLANNING</p>
                        {showTimeline && <p>Timeline</p>}
                        {showBoard && <p>Board</p>}
                    </div>
                </div>
            </div>
            <div className='side-bar-buttons'>
                <button onClick={handleToggleBoard}>&gt;</button>
                <p>PROJECT SETTINGS</p>
            </div>
            {showBoard && (
                <div>
                    {/* Render your board component here */}
                    <p>Board Content</p>
                </div>
            )}
        </sidebar>
    );
}

export default Sidebar;
