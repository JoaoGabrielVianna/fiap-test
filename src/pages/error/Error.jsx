// Error.jsx
import React from 'react'
import Error404 from '../../assets/svgs/404.svg'
import LogoFiap from '../../assets/svgs/logo-fiap.svg'
import './Error.scss'

function Error() {
  return (
    <div className='error-container'>
      <header>
        <img src={LogoFiap} alt="" />
      </header>
      <div className="error-content">
      <img src={Error404} alt=""  className='error'/>
      </div>
    </div>
  )
}

export default Error