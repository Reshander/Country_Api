import React from 'react'

export default function (props) {
  return (
    <div>
        {
          <div className='btn btn-primary" type="submit"' >
            <input onChange={(e) => props.setUserInput(e.target.value)}></input>
            <button className='m-3 p-2 btn btn-danger'  onClick={(e) => props.setUserInput(e.target.value)}>search</button>
            </div>
        }
    </div>
  )
}
