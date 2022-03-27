import { useState } from "react";

import Header from "./components/headerCom/headerCom";
import Preview from "./components/previewCom/previewCom";
import Editor from "./components/editorCom/editorCom";

const App = () => {
    // this will setup the initial localStorage task 
    let backedData = JSON.parse(localStorage.getItem('noteStore'))
    if(backedData === null){
        backedData = [{title: "Hello", cont: "this is a dummy note. You can delete it."}]
    }    
    const [noteList, updateNoteList] = useState(backedData)    
    
    // THIS WILL ADD NOTE TO LIST>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const addToList = (note) => {        
        updateNoteList((prev) => {
            let updated = [...prev, note]
            // updating local storage 
            localStorage.setItem('noteStore', JSON.stringify(updated))
            return updated
        })
        
    }
    // THIS WILL REMOVE NOTE FROM LIST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const removeFromList = (index) => {        
        updateNoteList((prev) => {
            console.log(prev)
            let updated = prev.filter((val, ind) => {
                return index !== ind
            })
            // updating local storage 
            console.log(updated)
            localStorage.setItem('noteStore', JSON.stringify(updated))
            return updated
        })        
    }
    return (
        <>
            <Header />
            <div className="edit-prev">
                <Editor
                    addToList={addToList}
                />                
                <Preview
                    noteList={noteList}
                    removeFromList={removeFromList}
                />
            </div>
        </>
    )
}
export default App;