import react, {usestate} from 'react'
import { todoform } from './todoform'
import { v4 as uuidv4 } from 'uuid';
import { todo } from './todo';
uuidv4();


export const todowrapper = () => {
    const [todos, settodos] = usestate([])

    const addtodo = todo => {
        settodos ([...todos, {id: uuidv4(), task: todo, completed: false, isediting: false}])
        console.log(todos)

    }
    const togglecomplete = id => { settodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)) }

    const deletetodo = id => { settodos(todos.filter(todo => todo.id !== id))
    }
    const edittodo = id => { settodos(todos.map(todo => todo.id === id ? {...todo, isediting: !todo.isediting} : todo)) 
}

    const edittask = (task, id) => {
        settodos(todos.map(todo => todo.id === id ? {...
            todo, task, isediting: !todo.isediting} : todo))
    }
        

    return (
        <div className='todowrapper'>
            <h1>Stream List.</h1>
            <todoform addtodo={addtodo} />
            {todos.map((todo, index) => (
                todo.isediting ? (
                    <edittodoform edittodo={edittask} task= {todo}/>
                ) :(
                <todo task={todo} key={index}
                togglecomplete={togglecomplete} deletetodo = {deletetodo} edittodo={edittodo} />
            )
        ))}
            
        </div>
    )
}