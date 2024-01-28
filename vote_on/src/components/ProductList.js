

import {useState} from 'react';

import Product, {allProducts} from "./Products";








function ProductList() {
    

    const [products, setProducts] = useState(allProducts);

    const updateVote = (productId) => {
        console.log("Product Id is ", productId);
        const nextProducts = products.map((product) => {
            if(product.id === productId) {
                return Object.assign({}, product, {
                    votes : product.votes + 1,
                });
            } 
            else {
                return product;
            }
        })

        setProducts(nextProducts);
    }
    // const updateVote = (productId) => {
    //     console.log('Updating vote for productId:', productId);
    //     setProducts((prevProducts) => {
    //         return prevProducts.map((product) =>
    //             product.id === productId ? { ...product, votes: product.votes + 1 } : product
    //         );
    //     });

    //     console.log('Updating vote for productId:', productId);
    // };
    


    const sortedproducts = [...products].sort((a,b) => b.votes - a.votes);
    
    
   
    return (
        <div>
        <div className="header">
            <h1> Vote-On Product List</h1>
        </div>
        <div className="itemlist">

            {
                
                
                sortedproducts.map( product => (
                <Product
                key={product.id}
                id= {product.id}
                imgurl={product.imgurl}
                name={product.name}
                model= {product.model}
                tagline= {product.tagline}
                votes={product.votes}
                onVote={updateVote}
                />
            ))}
            

            
        
        </div>
        </div>
    )
}

export default ProductList;


