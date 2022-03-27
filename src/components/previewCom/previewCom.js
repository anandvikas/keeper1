import './previewCom.css'

import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';


const Preview = (props) => {
    let noteList = props.noteList
    // console.log(noteList)
    return (
        <section className="previewSec">
            {
                noteList.map((val, ind) => {
                    return (
                        <div className='showCard' key={ind}>
                            <h3>{val.title}</h3>
                            <p>{val.cont}</p>
                            <hr/>
                            <Tooltip title="Delete" placement="left" arrow><DeleteIcon id='rmBtn' onClick={()=>{props.removeFromList(ind)}}/></Tooltip>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Preview;