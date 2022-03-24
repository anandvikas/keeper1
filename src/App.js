import { useState } from "react";

import Header from "./components/headerCom/headerCom";
import Preview from "./components/previewCom/previewCom";
import Editor from "./components/editorCom/editorCom";

const App = () => {
    const [ noteList, updateNoteList] = useState([])
    // THIS WILL ADD NOTE TO LIST>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const addToList = (note) => {
        updateNoteList((prev)=>{
            return [...prev, note]
        })
    }
    // THIS WILL REMOVE NOTE FROM LIST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const removeFromList = (index) => {
        updateNoteList((prev)=>{
            let filtered = prev.filter((val, ind)=>{
                return index !== ind
            })
            return filtered
        })
    }
    return (
        <>
            <Header/>
            <div className="edit-prev">
                <Preview
                    noteList={noteList}
                    removeFromList={removeFromList}
                />
                <Editor
                    addToList={addToList}
                />
            </div>
            {/* <div id="checking">
                vikas
            </div> */}
        </>
    )
}
export default App;