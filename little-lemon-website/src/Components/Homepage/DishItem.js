import react from 'react'

const DishItem = (props) => {
    return (
        <div>
            <img src={props.img} alt="Dish" />
            <h3>{props.dish}</h3>
            <p>${props.price}</p>
            <p>Est voluptate nulla duis voluptate enim aute ipsum quis duis in deserunt cupidatat laboris deserunt. Aliquip laborum irure commodo labore incididunt. Ex Lorem est ut duis adipisicing sit cillum mollit pariatur amet aute. Culpa id deserunt magna excepteur fugiat commodo nisi sunt commodo id deserunt nulla sunt.</p>
            <a href='delivery'>Order a delivery</a>
        </div>
    )
}

export default DishItem