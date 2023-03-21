import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  
  function handleClick(){
      props.onChecked(props.id);
  }
  
  return (
    <div className="card-container">
      <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      </div>
    <div>
      <button onClick={handleClick} > <DeleteIcon /> </button>
    </div>
    </div>

  );
}
export default Note;
