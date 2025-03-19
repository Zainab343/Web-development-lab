const Product = {
    product1: {
      name: "Glass Cleaner",
      price: 958,
      discount: "20%",
      features: "Streak-Free, Ideal for Home, Office & Car"
    },
    product2: {
      name: "Waterless Car Wash",
      price: 958,
      discount: "20%",
      features: "Wash in Minutes, No Scratch Formula, Lifts Dirt & Road Grime"
    }
  }
  for (let product in Product) {
    console.log("Product:", product);
    console.log("Name:", Product[product].name);
    console.log("Price:", Product[product].price);
    console.log("Discount:", Product[product].discount);
    console.log("Features:", Product[product].features);
    console.log("-----------------------------------");
  }