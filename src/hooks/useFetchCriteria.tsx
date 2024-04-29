import { useState, useEffect, useCallback, useRef } from "react";
import ProductsService from "../services/productsService";
import { Brands, Categories, CriteriasProducts, SubCategories, searchProduct } from "../types/products.type";

const useFetchCriteria = () => {

  const [criterias, setCriterias] = useState< CriteriasProducts >({
    brands: [],
    categories: [],
    subCategories: []
  });
  const criteriasAreFetched = useRef<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await ProductsService.getAllCriterias();
  
      const categories: Categories[]= response.data.categories;

      const brands = response.data.brands.map((e: Brands) => ({
        id: e.id,
        name: e.name,
        categories: e.categories
      })); 

      const subCategories = response.data.subCategories.map((e: SubCategories) => ({
        id: e.id,
        name: e.name,
        categoryId: e.categoryId,
        categoryName: e.categoryName
      })); 
  
      setCriterias((prevState : CriteriasProducts) => ({
        ...prevState,
        categories: categories, 
        brands: brands,
        subCategories: subCategories
      }));

      criteriasAreFetched.current = true;

    } catch (error :any) {
      setError(error );
  
    } finally {
      setLoading(false);
    }
  
  }, []); 

  useEffect(() => {

    if(criteriasAreFetched.current === false ){
      fetchData();
    }        

  }, [fetchData ,criterias]);


  const update = async (newData : searchProduct) => {
    try {

      const response = await ProductsService.getSearchProducts(newData);
      if( response.status >= 200) {
        return response.data;
      }
      
    } catch (err:any) {
      return err;
    }
  }

  return { criterias, loading, error, update ,criteriasAreFetched};
};



export { useFetchCriteria };