
import "../index.css"



const allProducts = [
    {
        id: 1,
        name: "BMW XYZ",
        model: "abc123",
        tagline: "Move like a lion",
        imgurl: "/media/bike.jpg",
        votes: 3,

    },
    {
        id: 2,
        name: "Apple",
        model: "Iphone 6",
        tagline: "The world in your pocket",
        imgurl: "/media/apple.jpg",
        votes: 4,
    },

    {
        id: 3,
        name: "Samsung",
        model: "Galaxy Wall2",
        tagline: "Live on your wall",
        imgurl: "/media/samsung.jpg",
        votes: 1

    }
]

function Product(props) {

    const handleVote = () => {
        props.onVote(props.id);
    }
    return (
        <div className="item">
            <div className="img">
            <img src={props.imgurl} alt="Bike"/>
            </div>
            <div className="details">
                <p> {props.name} </p>
                <p> {props.model} </p>
                <p> {props.tagline} </p>
            </div>

            <div className="voteNumber">
            <button onClick={() => props.onVote(props.id)} >Up Vote : {props.votes}</button>

            </div>

        </div>
    )
}

export default Product;
export {allProducts};

