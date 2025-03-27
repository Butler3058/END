import react, {usestate} from 'react'

export const edittodoform = ({edittodo, task}) => {
    const [value, setvalue] = usestate(task.task)

    const handlesubmit = e => {
        e.preventDefault();

        edittodo(value, Tasks.id);

        setvalue("")
    }
    return (
        <form classname= 'todoform' onsubmit ={handlesubmit}>
            <input type="text" classname='todo-input' value= {value} placeholder='todays tasks?' onchange={(e) => setvalue(e.target.value)}/>
             <button type='submit' classname='todo-btn'>update task</button>
        </form>

            
    )


}