import "./ProductPage.css"

const ProductPage = () => {
    return (
        <section className="container">
            <div className="product">
                <img src="n/a" alt="The product"></img>
                {/* ceate slideshow here */}
            </div>
            <div>
                <p>name</p>
                <p>sizes</p>
                <p>$0.00</p>
                <button>Add To Cart</button>
            </div>
        </section>
    )
}

export default ProductPage