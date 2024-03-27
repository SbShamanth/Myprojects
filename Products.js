import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductList({ addToCart, productsList }) {
    const navigate = useNavigate();

    const products = [
        {
            name: "Puma Shoes",
            price: 1000,
            image: "https://th.bing.com/th/id/R.efc9d81ebd53ed8bfe0315362d6887ed?rik=HGxFxeVvP0BScQ&riu=http%3a%2f%2fwww.tennisnuts.com%2fimages%2fproduct%2ffull%2fNIKE-FREE-50-642198_406_A_PREM.jpg&ehk=tucvPac5jtnLAnXnFXgPajBJoAdraWQ%2fVg0cDe35EZk%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Nike Shoes",
            price: 2000,
            image: "https://cdna.lystit.com/photos/puma/8ac06b43/puma-QUIET-SHADE-Puma-Black-Viz-Runner-Mens-Running-Shoes.jpeg"
        }
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <div style={{ position: 'absolute', top: '10px', right: '800px', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faShoppingCart} onClick={() => navigate('/cart')} />
                <span>{productsList.length}</span>
            </div>

            <h2>The list of the products are</h2>
            <div>
                {products.map((product, index) => (
                    <div key={index}>
                        <img 
                            src={product.image}  
                            alt={`pic of ${product.name}`}
                            style={{ width: '150px', height: '150px' }}
                        />
                        <h2>
                           {product.name} 
                        </h2>
                        <br/>
                        <h3>Price: ₹{product.price}</h3>
                        <div>
                            <button onClick={() => handleAddToCart(product)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;



















// import React, { useState } from "react";

// function ProductList(props) {
//     const [item, setItem] = useState('');

//     return (
//       <div>
//      <div style={{ position: 'absolute', top: '10px', right: '800px' }}>
//     <button>
//         Cart
//     </button>
// </div>

//        The list of the products are
//        <div>
//             <div>
//                 <img 
//                     src="https://th.bing.com/th/id/R.efc9d81ebd53ed8bfe0315362d6887ed?rik=HGxFxeVvP0BScQ&riu=http%3a%2f%2fwww.tennisnuts.com%2fimages%2fproduct%2ffull%2fNIKE-FREE-50-642198_406_A_PREM.jpg&ehk=tucvPac5jtnLAnXnFXgPajBJoAdraWQ%2fVg0cDe35EZk%3d&risl=&pid=ImgRaw&r=0"  
//                     alt="pic of shoe of puma"
//                     style={{ width: '150px', height: '150px' }} // Set width and height
//                 />
//                 <br/>
//                 <h>
//                     Price:-1000rs
//                 </h>
//                 <div>
//                     <button>
//                         Add to cart
//                     </button>
//                 </div>
//             </div>

//             <div>
//                 <img 
//                     src="https://cdna.lystit.com/photos/puma/8ac06b43/puma-QUIET-SHADE-Puma-Black-Viz-Runner-Mens-Running-Shoes.jpeg"  
//                     alt="pic of shoe of nike"
//                     style={{ width: '150px', height: '150px' }} // Set width and height
//                 />     <br />
//                      <h>
//                     Price:-2000rs
//                 </h>
//                 <div>
//                     <button>
//                         Add to cart
//                     </button>
//                 </div>
//             </div>
//        </div>
//       </div>
//     );
// }

// export default ProductList;

