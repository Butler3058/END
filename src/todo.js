import react from 'react'
import { fontawesomeicon } from '@fortawesome/react-fontawesome'
import { fapentosquare } from '@fortawesome/free-solid-svg-icons'
import { fatrash } from '@fortawesome/free-solid-svg-icons'

export const todo = ({task, togglecomplete, deletetodo, edittodo}) => {
    return (
        <div className='todo'>
            <p onClick={() => togglecomplete(task.id)}
                className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>

            <div>
                <fontawesomeicon icon={fapentosquare} onclick={() => edittodo(task.id)} />
                <fontawesomeicon icon={fatrash} onclick={() => deletetodo(task.id)}/>
            </div>
        </div>
    )
}