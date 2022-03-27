import { useState } from "react";

import Header from "./components/headerCom/headerCom";
import Preview from "./components/previewCom/previewCom";
import Editor from "./components/editorCom/editorCom";

const App = () => {
    const [noteList, updateNoteList] = useState([])    
    // localStorage.setItem('noteStore', JSON.stringify(noteList))
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
            let updated = prev.filter((val, ind) => {
                return index !== ind
            })
            // updating local storage 
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
                {/* <hr /> */}
                <Preview
                    noteList={JSON.parse(localStorage.getItem('noteStore'))}
                    removeFromList={removeFromList}
                />
            </div>
        </>
    )
}
export default App;