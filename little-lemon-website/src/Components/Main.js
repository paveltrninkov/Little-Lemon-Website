import react from 'react'
import GreekSalad from '../Assets/greek salad.jpg'
import Bruchetta from '../Assets/bruchetta.svg'
import LemonDessert from '../Assets/lemondessert.jpg'

const Main = () => {
    return (
        <main>
            <div className='Specials'>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className='Menu'>
                    <div>
                        <img src={GreekSalad}/>
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                        <p>Est voluptate nulla duis voluptate enim aute ipsum quis duis in deserunt cupidatat laboris deserunt. Aliquip laborum irure commodo labore incididunt. Ex Lorem est ut duis adipisicing sit cillum mollit pariatur amet aute. Culpa id deserunt magna excepteur fugiat commodo nisi sunt commodo id deserunt nulla sunt.</p>
                        <a href='delivery'>Order a delivery</a>
                    </div>
                    <div>
                        <img src={Bruchetta}/>
                        <h3>Bruchetta</h3>
                        <p>$5.99</p>
                        <p>Est voluptate nulla duis voluptate enim aute ipsum quis duis in deserunt cupidatat laboris deserunt. Aliquip laborum irure commodo labore incididunt. Ex Lorem est ut duis adipisicing sit cillum mollit pariatur amet aute. Culpa id deserunt magna excepteur fugiat commodo nisi sunt commodo id deserunt nulla sunt.</p>
                        <a href='delivery'>Order a delivery</a>
                    </div>
                    <div>
                        <img src={LemonDessert}/>
                        <h3>Lemon Dessert</h3>
                        <p>$5.00</p>
                        <p>Est voluptate nulla duis voluptate enim aute ipsum quis duis in deserunt cupidatat laboris deserunt. Aliquip laborum irure commodo labore incididunt. Ex Lorem est ut duis adipisicing sit cillum mollit pariatur amet aute. Culpa id deserunt magna excepteur fugiat commodo nisi sunt commodo id deserunt nulla sunt.</p>
                        <a href='delivery'>Order a delivery</a>
                    </div>
            </div>
        </main>
    )
}

export default Main