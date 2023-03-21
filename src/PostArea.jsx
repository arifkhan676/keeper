import React,{useState} from "react";

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
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content:"",
   });
    event.preventDefault();
  }


  return (
    <div className="box">
      <form  >
        <input name="title" onChange={handleChange}  value={note.title} placeholder="title" />
        <textarea name="content" onChange={handleChange}  id=""  rows="3" value={note.content}  placeholder="content" ></textarea>
        <button onClick={submitNote}>Post</button>
      </form>
    </div>
  );
}
export default PostArea;
