
import './yoga.css'
const Tree = (props) => {





  return (
    <div>
      <dialog id="dialog" className='showmodel' >
        <div><button className="yog_close_button" onClick={props.close}>x</button><img src="/Yog/treepose.png" />
        </div>
      </dialog>
    </div>

  )
}

export default Tree