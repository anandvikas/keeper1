import './previewCom.css'
const Preview = (props) => {
    let noteList = props.noteList
    return (
        <section className="previewSec">
            {
                noteList.map((val, ind) => {
                    return (
                        <div className='showCard' key={ind}>
                            <h3>{val.title}</h3>
                            <p>{val.cont}</p>
                            <button onClick={()=>{props.removeFromList(ind)}}>remove</button>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Preview;