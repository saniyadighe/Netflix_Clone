import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopNav = () => {

    const navlinks = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/myList" },
      ];
    
  return (
    <NavContainer>
        <div className='leftSide'>
            <div className='logo'>
            <img
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
                    alt='no internet connection'
                />
            </div>
            <ul className='links'>
                {
                    navlinks.map(({name, link})=>{
                        return(
                            <li key={name}>
                                <Link> {name}</Link>

                            </li>
                        )
                    })
                }
            </ul>

        </div>

        <div className='rightSide'>
            
        </div>
    </NavContainer>
  )
}

const NavContainer = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;

    .logo {
        img {
          height: 3rem;
          cursor: pointer;
        }
      }
`

export default TopNav