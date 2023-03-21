import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';




function PostArea(props) {

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

  const isZoom = false;

 
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
        {isZoom === true ?  <form className="create-form" >
        <input name="title" onChange={handleChange}  value={note.title} placeholder="Title" />
       
        <textarea name="content" onChange={handleChange}  id=""  rows="3" value={note.content}  placeholder="Post your activity" ></textarea>
        <Zoom in={true} >  
        <Fab onClick={submitNote}> <AddIcon/> </Fab>  
        </Zoom>
      </form>  : 
      <form className="create-form" >
    <textarea name="content" onChange={handleChange}  id=""  rows="1" value={note.content}  placeholder="Post your activity" ></textarea>
    </form>
      }
     
    </div>
  );
}
export default PostArea;
