import React from 'react'

const Text = (props) => {
    const saveObjectHendler = () =>{
        props.onGetText({age:5})
    }
    const appObjectHendler = () =>{
        props.onGetText({age:10})
    }
    const clickObjectHendler = () =>{
        props.onGetText({age:20})
    }
  return (
    <div>
      <button onClick={saveObjectHendler}>ADD</button>
      <button onClick={appObjectHendler}>APP</button>
      <button onClick={clickObjectHendler}>Click</button>
    </div>
  )
}

export default Text
