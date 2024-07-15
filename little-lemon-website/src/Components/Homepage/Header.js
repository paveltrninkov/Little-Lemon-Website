import react from 'react'
import Restaurant from '../../Assets/restaurant.jpg'

const Header = () => {
    return (
        <header>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Pariatur veniam aute labore ut labore ipsum nulla excepteur. Minim aute reprehenderit anim qui deserunt. Excepteur do incididunt pariatur et dolor Lorem. Exercitation aliqua consequat eiusmod elit consequat. Nostrud enim ea deserunt minim et tempor non mollit labore amet non elit. Aliqua pariatur laboris non est incididunt adipisicing reprehenderit cupidatat tempor. Ad laboris do nostrud aliqua nostrud eiusmod dolor mollit cillum ullamco elit incididunt.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={Restaurant}/>
        </header>
    )
}

export default Header