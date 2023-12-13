import React, { useState } from 'react';
import '../../style/index.css';
import View from '../View.js';
import { IconPlus, IconChevronDown, IconChevronRight, IconDots, IconPencil } from '@tabler/icons-react';

function Sprint({ name, startDate, endDate, issues, issueName }) {
    const [showIssues, setShowIssues] = useState(false);
function Hide({}){
    
}
    return (
        <>
            <div className='sprints'>
                <div className='top-sprint'>
                    <div className='left-side-sprint' onClick={() => setShowIssues(!showIssues)}>
                        {showIssues ? <IconChevronDown /> : <IconChevronRight />} <p>{`${name} ${startDate} - ${endDate} (${issues.length} issues)`}</p>
                    </div>
                    <div className='right-side-sprint'>
                        <button>Complete sprint</button>
                        <button><IconDots /></button>
                    </div>
                </div>
                {showIssues && (
                    <div className='sprint-cards'>
                        {issues.map((issue, index) => (
                            <div className="sprint-task" key={index}>
                                <div className='sprint-task-left'>
                                    <View />
                                    <p>{issueName}</p><p>{issue} </p><IconPencil />
                                </div>
                                <div className='sprint-task-right'>
                                    <div className='profile-icon'>
                                        <img src="https://media.tenor.com/AlvyE4oRj24AAAAd/nerd-nerd-emoji.gif" alt="Profile"></img>
                                    </div>
                                    <IconDots />
                                </div>
                            </div>
                        ))}
                        <div className='issue-div'>
                            <IconPlus /> <p className="hideMe" onClick={Hide}>Create Issue</p>

                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

function Backlog() {
    const [showBacklog, setShowBacklog] = useState(false);

    const sprintsData = [
        { name: [], startDate: [], endDate: [], issueName: [], issues: [[]] },
    ];

    return (
        <>
            <div className='backlog'>
                {sprintsData.map((sprint, index) => (
                    <Sprint key={index} {...sprint} />
                ))}
                <div className='backlog-card'>
                    <div className='top-sprint' onClick={() => setShowBacklog(!showBacklog)}>
                        <div className='left-side-sprint'>
                            {showBacklog ? <IconChevronDown /> : <IconChevronRight />} <p>Backlog (0 issues)</p>
                        </div>
                        <div className='right-side-sprint'>
                            <button>Create sprint</button>
                        </div>
                    </div>
                    {showBacklog && (
                        <>
                            <div className='backlog-cards'>
                                Your backlog is empty
                            </div>
                            <div className='issue-div'>
                                <IconPlus /> <p>Create issue</p>
                            </div>
                        </>
                    )}

                </div>

            </div>
        </>
    );
}

export default Backlog;
