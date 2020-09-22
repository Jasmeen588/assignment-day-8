let products = [
    {
      id: 1,
      name: "indian dress",
      size: "M",
      color: "grey", 
      price: 1200,
      image: "product1.jpg",
      description: "Good looking indian dress ",
    },
    {
      id: 2,
      name: "jacket",
      size: "M",
      color: "Blue",
      price: 1500,
      image: "product2.jpeg",
      description: "Good looking jacket",
    },
  
    {
      id: 3,
      name: "dress",
      size: "S",
      color: "grey",
      price: 900,
      image: "product3.jpg",
      description: "Good looking dress",
    },
  
    {
      id: 4,
      name: "frock",
      size: "M",
      color: "red and white",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull frock",
    },
  
    {
      id: 5,
      name: "frock",
      size: "S",
      color: "white and Blue",
      price: 1300,
      image: "product5.jpg",
      description: "beautifull frock",
    },
  
    {
      id: 6,
      name: "trouser",
      size: "M",
      color: "black",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking trouser",
    },
    {
        id: 7,
        name: "check shirt",
        size: "M",
        color: "black",
        price: 1500,
        image: "product7.jpg",
        description: "Good looking shirt",
      },
      {
        id: 8,
        name: "kids shirt and pent ",
        size: "M",
        color: "grey and maroon",
        price: 2000,
        image: "product8.jpg",
        description: "Good looking shirt pent",
      },
      {
        id: 9,
        name: "kids track suit",
        size: "L",
        color: "black",
        price: 2500,
        image: "product9.jpg",
        description: "Good looking track suit",
      },
      {
        id: 10,
        name: "Indian Dress",
        size: "M",
        color: "black",
        price: 3500,
        image: "product10.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 11,
        name: "skirt Dress",
        size: "M",
        color: "black",
        price: 2000,
        image: "product11.jpg",
        description: "Good looking Dress",
      },
      {
        id: 12,
        name: "skirt Dress",
        size: "s",
        color: "blue",
        price: 1500,
        image: "product12.jpg",
        description: "Good looking Dress",
      }
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description ;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  function searchPrice(searchValue) {
    let searchedPrices = products.filter(function (product, index) {
      let searchStrinm =
      product.name + " " +product.price;
  
      return searchStrinm.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedPrices);
  }
  // 
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
    if(id==pro.id){
        console.log("Same");
    }
    //   putting in cart
    cart.push(pro);
    
    displayProducts(cart, "cart");
  }
  //
  function totalcount(id){
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }