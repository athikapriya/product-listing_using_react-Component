const products = [
    {
        src : "src/assets/images/gray tshirt.jpg",
        title : "gray t-shirt",
        price : "$109.5",
        rating : "3.5/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        src : "src/assets/images/hoddie.jpg",
        title : "Off-white Hoodie",
        price : "$89.5",
        rating : "4.5/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        src : "src/assets/images/purple dress.jpg",
        title : "Purple Dress",
        price : "$99.5",
        rating : "3.8/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        src : "src/assets/images/tank top.jpg",
        title : "Tank Top",
        price : "$100.5",
        rating : "4.5/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        src : "src/assets/images/white jacket.jpg",
        title : "White Jacket",
        price : "$89.5",
        rating : "3.5/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        src : "src/assets/images/white shirt.jpg",
        title: "White Shirt",
        price : "$109.5",
        rating : "3.5/5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];


function Product() {
    return <div className="container">
        <div className="flexbox">
        {
            products.map((product, index)  => <div key={index}>
                <img src={product.src} alt="product" />
                    <div className="product-texts">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price"> Price : {product.price}</p>
                        <p className="product-rating">Rating : {product.rating}</p>
                        <p className="product-description"><span>Description :</span> {product.description}</p>
                        <a href="#" className="cart-btn">Add to cart</a>
                    </div>
                </div> )
                }
        </div>
    </div>
}


export default Product