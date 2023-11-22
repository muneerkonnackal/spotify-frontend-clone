import React from 'react'
import RightHeader from './RightHeader'
import '../styles/Rightside.css'
import Mainbody from './Mainbody'
import Bottombanner from './Bottombanner'

function Rightside() {
  return (
    <div className='rightMenu'>
        <RightHeader/>
        <Mainbody/>
        <Bottombanner/>
    </div>
  )
}

export default Rightside