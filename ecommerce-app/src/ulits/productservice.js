const fetchProducts = async () => {
    try {
      const response = await fetch("https://backendapi-cwp7.onrender.com/api/products");
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  export { fetchProducts };
  