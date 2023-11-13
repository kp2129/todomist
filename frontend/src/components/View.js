import React from 'react'

export default function View() {
    const [todoData, setTodoData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('api.php').then((res) => {
            
            if(res.data.code === 0){
                alert("Error: "+ res.data.reason);
            }else{
                console.log(res.data.reason);
                setMovieData(res.data.reason);
            }
            
        });
    }, []);
  return (
    <>
        <div className='mainContainer'>
            <p className='text-white'>{x.taskName} 
            <span className='text-secondary'>({x.taskDescription})</span> 
            <span className='text-secondary'>({x.dueDate})</span>
            <span className='text-secondary'>({x.created_at})</span>
            <span className='text-secondary'>({x.updated_at})</span>
            </p>
        </div>
    </>
  )
}
