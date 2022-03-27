import { useEffect, useRef, useState } from 'react';
import './editorCom.css'
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import PaletteIcon from '@mui/icons-material/Palette';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

// WritingBoard COMPONENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const WritingBoard = (props) => {
    // for input in text note 
    const [noteT, updateNoteT] = useState({ title: '', cont: '' })

    const notingT = (e) => {
        let { value, name } = e.target
        updateNoteT((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const addNoteT = (e) => {
        e.preventDefault()
        if(noteT.title === '' && noteT.cont === ''){
            alert('cannot add empty note');            
        } else {
            props.addToList(noteT)
        }       
        updateNoteT({ title: '', cont: '' })
        props.Utnv('hidden')
        props.UchooseV('choose')
    }
    return (
        <>
            <div className={props.tnv}>
            <CloseIcon id='closeIcon'/>
                <form >
                    <input type="text" placeholder="title" autoComplete="off" name="title" value={noteT.title} onChange={notingT} /><br />
                    <textarea rows="5" column="" placeholder="content ..." name="cont" value={noteT.cont} onChange={notingT} /><br />
                    <hr/>
                    <button id="addBtn" onClick={addNoteT}>Save</button>
                </form>
            </div>
        </>
    )
}

// Parent Component >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const Editor = (props) => {

    // to toggle visibility of components 
    const [tnv, Utnv] = useState('hidden')
    const [chhoseV, UchooseV] = useState('choose')
    const toggleText = () => {
        Utnv('workSpace')
        UchooseV('hidden')
    }
    
    return (
        <section className="editSec">
            <div className={chhoseV}>
                <Tooltip title="Write" placement="top"><Button onClick={toggleText}><CreateIcon fontSize='inherit'/></Button></Tooltip>
                <Tooltip title="Draw" placement="top"><Button onClick={() => { alert('this feature is under development') }}><PaletteIcon fontSize='inherit'/></Button></Tooltip>
            </div>
            <WritingBoard
                tnv={tnv}
                Utnv={Utnv}
                UchooseV={UchooseV}
                addToList={props.addToList}
            />            
        </section>
    )
}
export default Editor;


// // DrawingBoard COMPONENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const DrawingBoard = (props) => {
//     const canvasRef = useRef(null)
//     const ctxRef = useRef(null)

//     useEffect(()=>{
//         const canvas = canvasRef.current

//         canvas.width = window.innerWidth * .3
//         canvas.height = window.innerHeight * .3        

//         const context = canvas.getContext('2d')

//         // context.lineCap = 'round'
//         context.strokeStyle = 'black'
//         context.lineWidth = 2

//         ctxRef.current = context
//     }, [])

//     let drawStatus = false
//     const startDraw = (e) => {
//         let {offsetX, offsetY} = e.nativeEvent
//         // console.log(offsetX, offsetY)        
//         ctxRef.current.beginPath() 
//         ctxRef.current.moveTo(offsetX, offsetY)    
//         drawStatus = true
//     }
//     const endDraw = () => {
//         ctxRef.current.closePath()
//         drawStatus = false
//     }
//     const draw = (e) => {
//         if(!drawStatus) return;
//         let {offsetX, offsetY} = e.nativeEvent        
//         ctxRef.current.lineTo(offsetX, offsetY)
//         ctxRef.current.stroke()
//     }

//     const addNoteD = ()=>{
//         let canvas2 = document.createElement('canvas')
//         canvas2 = canvasRef.current
//         document.getElementById('checking').append(canvas2)
//         // let ctx2 = canvas2.getContext('2d')
//         // ctx2 = ctxRef.current
        
//         // console.log(canvasRef.current)
//     }
//     return (
//         <>
//             <div className='hidden'>
//                 <div>
//                     <input type="text" placeholder="title" autoComplete="off" name="title" /><br />
//                     <canvas id='canvas1'
//                         onMouseDown={startDraw}
//                         onMouseUp={endDraw}
//                         onMouseMove={draw}
//                         ref={canvasRef}
//                     />
//                     <button id="addBtn" onClick={addNoteD}>Add</button>
//                 </div>
//             </div>
//         </>
//     )
// }