import react, {usestate} from 'react'

export const todoform = ({addtodo}) => {
    const [value, setvalue] = usestate("")

    const handlesubmit = e => {
        e.preventDefault();

        addtodo(value)

        setvalue("")
    }
    return (
        <form classname= 'todoform' onsubmit ={handlesubmit}>
            <input type="text" classname='todo-input' value= {value} placeholder='what is the task today?' onchange={(e) => setvalue(e.target.value)}/>            <button type='submit' classname='todo-btn'>add task</button>
        </form>

            
    )

}