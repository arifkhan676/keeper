import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  
  function handleClick(){
      props.onChecked(props.id);
  }
  return (
    <div className="card-container col-lg-4">
      <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      </div>
    <div className="delete-icon">
      <button onClick={handleClick} > <DeleteIcon /> </button>
    </div>
    </div>


  );
}
export default Note;
