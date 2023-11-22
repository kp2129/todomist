import React from 'react'
import '../../style/index.css';
import { IconChevronRight, IconDots } from '@tabler/icons-react';


function Backlog() {
    return (
        <>
            <div className='backlog'>
                <div className='sprints'>
                    <div className='left-side-sprint'>
                        <IconChevronRight /> <p>TMST Sprint 1  13 Nov - 11 Dec (15 issues)</p>
                    </div>
                    <div className='right-side-sprint'>
                        <button>Complete sprint</button>
                        <button><IconDots /></button>
                    </div>
                </div>
                <div className='sprints'>
                    <div className='left-side-sprint'>
                        <IconChevronRight /> <p>Backlog (0 issues)</p>
                    </div>
                    <div className='right-side-sprint'>
                        <button>Create sprint</button>  
                    </div>
                </div>
            </div>
        </>
    )

}

export default Backlog;