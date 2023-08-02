import { useState } from 'react'
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState('')
  const [letterSelect, setLetterSelect] = useState('')

  const handleMenu = () => {
    showMenu === 'slide-menu' ? setShowMenu('close-menu') : setShowMenu('slide-menu')
  }

  const handleLetterSelect = (letter: string) => {
    setLetterSelect(old => old + letter)
  }

  const deletLetter = () => {
    setLetterSelect(old => old.substring(0, letterSelect.length - 1))
  }

  const spaceLetter = () => {
    setLetterSelect(old => old + ' ')
  }

  const alfabetic = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#']
  const images = ['https://picsum.photos/200/301', 'https://picsum.photos/200/302', 'https://picsum.photos/200/303', 'https://picsum.photos/200/304', 'https://picsum.photos/200/305']


  const [teste, setTest] = useState(false)
  return (
    <div className="container">
      <button
        id={showMenu === 'slide-menu' ? 'close-button' : undefined}
        onClick={handleMenu}
      >
        {showMenu === 'slide-menu' ? 'X' : '=='}
      </button>
      <div className={`menu-container ${showMenu}`}>

      </div>
      <textarea value={letterSelect}>{letterSelect}</textarea>
      <div className="alfabetc-container">
        {alfabetic.map((letter, i) => (
          <p
            key={i}
            onClick={() => handleLetterSelect(letter)}
          >
            {letter}
          </p>
        ))}
        <p onClick={spaceLetter}>SPC</p>
        <p onClick={deletLetter}>Del</p>
      </div>


      <div className='containe'>
        {
          images.map((image, i) => (
            <div className="images-container" key={i} >
              <img src={image} alt="" />
              <div className="hover-instagram">
                <div className="insta"></div>
              </div>
            </div>
          ))
        }
      </div>


      <div className="images-move">
        {
         

          images.map((image, i) => (
            <img src={image} alt="" key={i} className={`image image-${i+1}`} onMouseEnter={() => setTest(true)} onMouseLeave={() => setTest(false)}/>
          ))
        }
      </div>
        {teste && <div className='aleatorio'></div>}

        <nav>
          <p id='nav-1'>Produtoss</p>
          <div className='products-container'>
            <p>produto 1</p>
            <p>produto 2</p>
            <p>produto 3</p>
            <p>produto 4</p>
          </div>
        </nav>

        <div className="header-move">
          <p>O Recentes</p>
          <p>Z Top</p>
          <p>A - Z</p>
          <p># Hashtags</p>
        </div>
    </div>
  )
}

export default App
