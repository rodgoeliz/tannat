import { useQuery, QueryOptions } from 'react-query';
import type { Product } from '../types/Products';
import { paramsToKeys } from '../utils/paramsToKeys';
import { paramsToQueryString } from '../utils/paramsToQueryString';



export type ProductQueryParams = Partial<Pick<Product, 'color'>>;


export const API_URL = 'https://my-json-server.typicode.com/YofretRios/jsondetails';
export const getProducts = async (params?: ProductQueryParams) => {
  const queryString = paramsToQueryString(params);
  const products = await fetch(`${API_URL}/products?${queryString}`)
    .then(res => res.json()) as Array<Product>;
  return products
}


export function useProducts({ params }: { params?: ProductQueryParams }) {
  const { data, isLoading } = useQuery(['products', ...paramsToKeys(params)], async () => {
    const products = await getProducts(params)

    // why is this here ?
    window.localStorage.setItem('products', JSON.stringify(products));

    return products;
  }, { initialData: [] });

  return { data, isLoading };
}

export default { useProducts };