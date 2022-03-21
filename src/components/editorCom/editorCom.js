import { useState } from 'react';
import './editorCom.css'


const Editor = (props) => {
    // to toggle visibility of components 
    const [tnv, Utnv] = useState('hidden')
    const [chhoseV, UchooseV] = useState('choose')
    const toggleText = () => {
        Utnv('workSpace')
        UchooseV('hidden')
    }
    // for input in text note 
    const [noteT, updateNoteT] = useState({title:'',cont:''})  
      

    const notingT = (e) => {
        let {value, name} = e.target
        updateNoteT((prev)=>{
            return {...prev, [name]:value}
        })
    }
    const addNoteT = (e) => {
        e.preventDefault()
        props.addToList(noteT)
        updateNoteT({title:'',cont:''})
        Utnv('hidden')
        UchooseV('choose')
    }
    return (
        <section className="editSec">
            <div className={chhoseV}>
                <button onClick={toggleText}>Write</button>
                <button onClick={()=>{alert('this feature is not available yet !')}}>Draw</button>
            </div>
            <div className={tnv}>
                <form >
                    <input type="text" placeholder="title" autoComplete="off"  name="title" value={noteT.title} onChange={notingT}/><br/>
                    <textarea rows="5" column="" placeholder="content ..."  name="cont" value={noteT.cont} onChange={notingT}/><br/>
                    <button id="addBtn" onClick={addNoteT}>Add</button>
                </form>
            </div>            
        </section>
    )
}
export default Editor;