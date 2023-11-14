import React, { useState } from 'react';
import '../style/index.css';
import { IconChevronDown, IconChevronRight, IconTimeline, IconColumns3, IconStack3 } from '@tabler/icons-react';

function Aside() {
  const [sections, setSections] = useState({ timeline: false, example: false });

  const handleToggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const getButtonIcon = (isSectionOpen) => {
    return isSectionOpen ? <IconChevronDown /> : <IconChevronRight />;
  };

  return (
    <aside>
      <div className={`side-bar-top ${sections.timeline ? 'active' : ''}`}>
        <div className='side-bar-side-top'>
          <div className='side-bar-buttons-top'>
            <button onClick={() => handleToggleSection('timeline')}>
              {getButtonIcon(sections.timeline)}
            </button>
          </div>
          <div className={`planning-section ${sections.timeline ? 'active' : ''}`}>
            <p>PLANNING</p>
            {sections.timeline && (
               <div className='inner-data'>
                <p><IconTimeline /> Timeline</p>
                <p><IconStack3 /> Backlog</p>
                <p><IconColumns3 /> Board</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`side-bar-bottom ${sections.example ? 'active' : ''}`}>
        <div className='side-bar-side-top'>
          <div className='side-bar-buttons-top'>
            <button onClick={() => handleToggleSection('example')}>
              {getButtonIcon(sections.example)}
            </button>
          </div>
          <div className={`planning-section ${sections.example ? 'active' : ''}`}>
            <p>PROJECT SETTINGS</p>
            {sections.example && (
              <div className='inner-data'>
                <p>Details</p>
                <p>Access</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
