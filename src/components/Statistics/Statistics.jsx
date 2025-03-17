


export default function Statistics ({good, neutral,bad, total}){

    
    return (<>
      <p>Statistics</p>
        <p>{good}</p> 
        <p>{neutral}</p>
        <p>{bad}</p>
        <p>Positive feedback {total}%</p>
    </>)
};


