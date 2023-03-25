import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function PostArea(props) {

    const [isExpand,setExpand] = useState(false);

    function clicked(){
      setExpand(true);
    }

     const [note,setNote] = useState({
        title: "",
        content:"",
     });

  function handleChange(event){
       const {name,value} = event.target;
       setNote(preNotes=>{
        return {
        ...preNotes,
        [name]:value
        }
       })
    }
 
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content:"",
   });
    event.preventDefault();
  }


  return (
    <div >
     <form className="create-form" >
      {isExpand &&
      <input name="title" onChange={handleChange}  value={note.title} placeholder="Title" />
      }
        <textarea onClick={clicked}  name="content" onChange={handleChange}  id=""  rows={isExpand ? 2 : 1 }  value={note.content}  placeholder="Post your activity" ></textarea>
        <Zoom in={isExpand} >  
        <Fab onClick={submitNote}> <AddIcon/> </Fab>  
        </Zoom>
      </form> 
    </div>
  );
}
export default PostArea;
