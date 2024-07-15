import react from 'react'
import GreekSalad from '../../Assets/greek salad.jpg'
import Bruchetta from '../../Assets/bruchetta.svg'
import LemonDessert from '../../Assets/lemondessert.jpg'
import DishItem from './DishItem'

const Main = () => {
    return (
        <main>
            <div className='Specials'>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className='Menu'>
                <DishItem
                img={GreekSalad}
                dish={"Greek Salad"}
                price={12.99}
                />
                <DishItem
                img={Bruchetta}
                dish={"Bruchetta"}
                price={5.99}
                />
                <DishItem
                img={LemonDessert}
                dish={"Lemon Dessert"}
                price={5.99}
                />
            </div>
        </main>
    )
}

export default Main