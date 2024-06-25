import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <a href='#home'><li>Home</li></a>
        <a href='#intro'><li>Intro</li></a>
        <a href='#cursos'><li>Cursos</li></a>
        <a href='#faq'><li>FAQ</li></a>
        <a href='#footer'><li>Footer</li></a>
      </ul>
    </div>
  )
}

export default Navbar