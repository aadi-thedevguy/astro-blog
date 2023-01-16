import {BsFillEmojiSunglassesFill,BsFillMoonStarsFill} from 'react-icons/bs/index'
import styles from './Navbar.module.scss'

import { useState,useEffect,useRef } from 'react'

const Navbar = () => {

  const [isDark, setIsDark] = useState(localStorage.getItem('theme') || 'dark')

  const ref = useRef()

  const darkMode = () => {
    setIsDark('dark')
    ref.current.play()
  }
  const lightMode = () => {
    setIsDark('light')
    ref.current.play()

  }

  useEffect(() => {
    localStorage.setItem('theme',isDark)
    document.body.className = isDark
  }, [isDark])
  

  return (

<nav className={styles.navbar}>
<audio ref={ref} src="/correct.mp3"></audio>
    
        <a href='https://thedevguy.in' target="_blank" rel="noreferrer" className={styles.navbarLogo} >
            <img src="/images/logo.svg" alt="logo" width={50} height={40} />
        </a>

        <ul className={styles.navbarLinks}>
            <li>
                <a href='/'>
                  All Blogs
                </a>  
            </li>
            <li>

                <a href="#" >
                  {
                    isDark === 'light' ? <BsFillMoonStarsFill onClick={darkMode}  /> : <BsFillEmojiSunglassesFill onClick={lightMode} />
                  }
                </a>
              
            </li>
         
        </ul>
</nav>
                                         
                   
  )
}

export default Navbar 