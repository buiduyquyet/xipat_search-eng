import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigator.css'

const Navigator = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? 'blue' : '',
        textDecoration: isActive ? 'underline' : ''
    })

    return (
        <div className='navigator'>
            <ul>
                <li>
                    <NavLink to='/' className='nav-NavLink' style={navLinkStyle}>Tìm từ: </NavLink>
                </li>
                <li>
                    <NavLink to='/homonym' className='nav-link' style={navLinkStyle}>Đồng âm</NavLink>
                </li>
                <li>
                    <NavLink to='/synonymous' className='nav-link' style={navLinkStyle}>Đồng nghĩa</NavLink>
                </li>
                <li>
                    <NavLink to='/opposite' className='nav-link' style={navLinkStyle}>Trái nghĩa</NavLink>
                </li>
                <li>
                    <NavLink to='/related-adj' className='nav-link' style={navLinkStyle}>Tính từ liên quan</NavLink>
                </li>
                <li>
                    <NavLink to='/related-nou' className='nav-link' style={navLinkStyle}>Danh từ liên quan</NavLink>
                </li>
                <li>
                    <NavLink to='/rhyme' className='nav-link' style={navLinkStyle}>Cùng vần</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigator
