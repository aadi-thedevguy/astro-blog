import {BsFillEmojiSunglassesFill} from 'react-icons/bs/index'
import {RiMoonClearFill,RiHome5Fill} from 'react-icons/ri/index'
import styles from './Navbar.module.scss'

import { useState,useEffect,useRef } from 'react'

const Navbar = () => {

  const [isDark, setIsDark] = useState(typeof localStorage !== 'undefined' && localStorage.getItem('theme') || 'light')

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

    if (isDark === 'dark') {
      document.body.classList.add('dark')
    } else {
    document.body.classList.remove('dark')
    }
  },[isDark])

  return (

<nav className={styles.navbar}>
<audio ref={ref} src="/correct.mp3"></audio>
    

        <ul className={styles.navbarLinks}>
          <li>

            <a href='https://thedevguy.in' target="_blank" rel="noreferrer" className={styles.navbarLogo} >
                <img src="/images/logo.svg" alt="logo" width={50} height={40} />
            </a>
          </li>
            <li>
                <a href='/'>
                  Home <RiHome5Fill />
                </a>  
            </li>
            <li>

                <a href="#" >
                  {
                    isDark === 'light' ? <RiMoonClearFill onClick={darkMode}  /> : <BsFillEmojiSunglassesFill onClick={lightMode} />
                  }
                </a>
              
            </li>
         
        </ul>
</nav>
                                         
                   
  )
}

export default Navbar 