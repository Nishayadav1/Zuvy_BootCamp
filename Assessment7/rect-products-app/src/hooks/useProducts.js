import React from "react"

import {deleteProduct, fetchProductById, fetchProducts, toggleFavorite, updateProduct} from '../api/productApi'



export const useProducts() {
  return useQuery ({
    queryKey:['products'],
    queryFn:fetchProducts,
    staleTime:1000*6*5
  });
}



export  const useProduct=(id)=>{
    return useQuery(
        {
            queryKey :['product',id]
            queryFn:()=>fetchProductById(id)
        }
    )
}

export const useCreateProduct=(id)=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:createProduct,
        onSuccess:()=>{
            queryClient.invalidation(['product'])
        }
    })
}


export const useUpdateProduct=()=>{
    const queryClient=useQueryClient();
    return useMustation({
        mutationFn:({id,...productData})=>updateProduct(id, productData),
        onSuccess:(data,variables)=>{
            queryClient.invalidateQueries(['products']);
            queryClient.invalidateQueries(['product',variables.id])
        }
    })
}

export const useDeleteProduct=()=>{
    const queryClient=useQueryClient();
    return useMustation({
        mutationFn:deleteProduct,
        onSuccess:()=>{
            queryClient.invalidateQueries(['products']);
        }
    })
}


export const useToggleFavorite=()=>{
    const queryClient=useQueryClient();
    return useMustation({
        mutationFn:({id,favoriteStatus})=>toggleFavorite(id,favoriteStatus),
        onMutate :async({ id,favoriteStatus})=>
            {await queryClient.cancelQueries(['products'])
                const previousProducts=queryClient.getQueryData(['products'])

                queryClient.setQueryData(['product'],(old)=>({
                    ...old,
                    data:old.data.map(product=>
                        product._id===id?{
                           ...product,favoriteStatus:product.favorite
                        }
                    )
                }))
            }
    })
}