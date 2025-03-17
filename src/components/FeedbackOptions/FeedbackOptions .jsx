



export default function FeedbackOptions ({countTotal, option}) {
    const  onGetFeeback = (e) => {
        countTotal(e.target.name.toLowerCase());
    }

        
        return (option.map(el => {
           return <li key={el}>
               <button
                name={el}   
                onClick={onGetFeeback}   
                type="button"
               >{el}</button>
            </li>
        }))
      
    };




