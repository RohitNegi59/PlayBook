

const Tree = (props) => {





  return (
    <div>
      <dialog id="dialog" className='showmodel' >
        <div><button onClick={props.close}>x</button><img src="/Yog/treepose.png" />
        </div>
      </dialog>
    </div>

  )
}

export default Tree