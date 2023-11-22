import React, { useState } from 'react';
import '../../style/index.css';
import { IconChevronRight, IconDots, IconPencil } from '@tabler/icons-react';

function Sprint({ name, startDate, endDate, issues, issueName }) {
    const [showIssues, setShowIssues] = useState(false);

    return (
        <>
            <div className='sprints'>
                <div className='top-sprint'>
                    <div className='left-side-sprint' onClick={() => setShowIssues(!showIssues)}>
                        <IconChevronRight /> <p>{`${name} ${startDate} - ${endDate} (${issues.length} issues)`}</p>
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
                                    <p>{issueName}</p><p>{issue} </p><IconPencil />
                                </div>
                                <div className='sprint-task-right'>
                                    <div className='profile-icon'>
                                        <img src="https://media.tenor.com/AlvyE4oRj24AAAAd/nerd-nerd-emoji.gif"></img>
                                    </div>
                                    <IconDots />
                                </div>

                            </div>
                        ))}
                    </div>
                )
                }
            </div >

        </>
    );
}

function Backlog() {
    const sprintsData = [
        { name: "TMST Sprint 1", startDate: "13 Nov", endDate: "11 Dec", issueName: 'TMST-1', issues: ['Nomirsti'] },
        // Add more sprint data as needed
    ];

    return (
        <>
            <div className='backlog'>
                {sprintsData.map((sprint, index) => (
                    <Sprint key={index} {...sprint} />
                ))}
                <div className='sprints'>
                    <div className='top-sprint'>
                        <div className='left-side-sprint'>
                            <IconChevronRight /> <p>Backlog (0 issues)</p>
                        </div>
                        <div className='right-side-sprint'>
                            <button>Create sprint</button>
                        </div>
                    </div>
                </div>
                <div className='sprint-cards'>

                </div>
            </div>
        </>
    );
}

export default Backlog;
