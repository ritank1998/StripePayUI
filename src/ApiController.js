export const handleBuyClick = async (product) => {
    console.log("product", product);
  
    try {
      const response = await fetch("http://localhost:1103/stripe/createsubs", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": product.name,
          "unit_amount": product.price,
          "currency": "INR",
          "quantity": 1,
          "email": "ritank.saxena@nanoheal.com",
          "cName": "Saxena"
        }),
      });
  
      const data = await response.json();
      window.open(JSON.parse(data).session.url , "_self")

     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export const handleToBuyItem = async(item)=>{
    try {
      const response = await fetch("http://localhost:1103/stripe/payproduct", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": item.name,
          "unit_amount": item.price,
          "currency": "INR",
          "quantity": 1,
          "email": "ritank.saxena@nanoheal.com",
          "cName": "Saxena"
        }),
      });
  
      const data = await response.json();
      window.open(JSON.parse(data).session.url , "_self")

     
    } catch (error) {
      console.error("Error:", error);
    }
  }