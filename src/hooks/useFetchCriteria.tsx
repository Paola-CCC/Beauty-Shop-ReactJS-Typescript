import { useState, useEffect, useCallback, useRef } from "react";
import ProductsService from "../services/productsService";
import { CriteriasProducts, Products, searchProduct } from "../types/products.type";

const useFetchCriteria = () => {
  const [criterias, setCriterias] = useState<CriteriasProducts>({} as CriteriasProducts);
  const [ productFilered, setProductFilered] = useState< Products[]>([]);
  const isFetched = useRef<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback( async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await ProductsService.getAllCriterias();
            
      setCriterias(response.data);

    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  },[]);

  useEffect(() => {

    if(isFetched.current === false ){
      fetchData();
      isFetched.current = true ;

    }

  }, [fetchData]);


  const update = async (newData : searchProduct) => {
    setLoading(true);
    setError(null);
    try {

      const response = await ProductsService.getSearchProducts(newData);
      if( response.status >= 200) {
        setProductFilered(response.data);
      }
    } catch (err:any) {
      setError(err);
    }
    setLoading(false);
  }

  return { criterias , loading, error , update ,productFilered };
};



export { useFetchCriteria };