import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import PostArea from "./PostArea";

function App() {

  const [AllNotes,SetNotes] = useState([]);

  function addNote(newNote){
    SetNotes(preNote=>{
      return [...preNote,newNote]
    })
  }
  function deleteItem(id){
           SetNotes(preNote=>{
        return  preNote.filter((item,index)=>{
          return index !== id;
         })
           })
  }

  return (
    <div className="App">
      <Header />
      <PostArea onAdd={addNote} />
      {AllNotes.map((noteitem,index )=> {
      return <Note key={index} id={index}  title={noteitem.title} content={noteitem.content} onChecked={deleteItem} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
