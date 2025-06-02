import axios from 'axios'

const API_BASE_URL='https://backendapi-cwp7.onrender.com/api/products';

export const fetchProducts=async()=>{
    const response=await axios.get(API_BASE_URL)
    return response.data;
}

export const fetchProductById=async(id)=>{
    const response=await axios.get(`${API_BASE_URL}/${id}`)
    return response.data;
}


export const createProduct=async(productData)=>{
    const response=await axios.post(API_BASE_URL, productData)
    return response.data;
}

export const updateProduct=async(id, productData)=>{
    const response=await axios.put(`${API_BASE_URL}/${id}`,productData)
    return response.data;
}

export const deleteProduct=async(id)=>{
    const response=await axios.delete(`${API_BASE_URL}/${id}`)
    return response.data;
}

export const toggleFavorite = async (id,favoriteStatus)={
    const response= await axios.put(`${API_BASE_URL}/${id}`,{
        favourite:!favoriteStatus
    })
};

