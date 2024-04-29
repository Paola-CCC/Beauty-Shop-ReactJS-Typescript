import React, { useEffect, useRef, useState } from 'react'
import "./SaerchGroup.scss";
import { DoubleInputPrice, InputSelect } from '../ui';
import { Button } from '@chakra-ui/react';
import { usePathname } from '../../hooks/useNavigate';
import { useFetchCriteria } from '../../hooks/useFetchCriteria';
import { Brands, Categories, Products, SubCategories, searchProduct } from '../../types/products.type';


interface searchGroupProps {
  handleSearch: (values: Products[]) => void
}

const SearchGroup = ( { handleSearch}: searchGroupProps ) => {

  const initialeState = {
    brandId: '',
    categoryId: '',
    subCategoryId: '',
    minPrice: '',
    maxPrice: '',
  };

  const [searchValues, setSearchValues] = useState(initialeState);
  const [searchResultsIsEmpty, setSearchResultsIsEmpty] = useState<boolean | null >(null);
  const { criterias, update, criteriasAreFetched} = useFetchCriteria();
  const criteriasCompleted = useRef<boolean>(false);
  const pathUrl = usePathname();
  //  Donne l'ID à utiliser selon l'url
  const pathCategoryID = (pathUrl === '/make-up' ? '2' : pathUrl === '/skin-care' ? '1' : '' );
  const [optionsBrands ,setOptionsBrands] = useState([
    { value: "", label: "marque" }
  ]);

  const [optionsCategory ,setOptionsCategory] = useState([
    { value: "", label: "catégorie" }
  ]);

  const [optionsSubCategory ,setOptionsSubCategory] = useState([
    { value: "", label: "sous catégorie" }
  ]);

  /** Assigne les donnée saisie à l'état */
  const handleChangeSearch = (event: any) => {

    setSearchValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));

  };

  /** Nettoie les éléments à rechercher */
  const resetSearch = () => {
    setSearchValues(initialeState);
    handleSearch([]);
    setSearchResultsIsEmpty(null);

  };

  /** Envoie les critères de recherche vers le Hook puis le backend */
  const searchData = async () => {

    try {

      const data : searchProduct= {
        brandId: searchValues.brandId ? Number(searchValues.brandId) : null,
        categoryId: searchValues.categoryId ? Number(searchValues.categoryId) : null,
        subCategoryId: searchValues.subCategoryId ? Number(searchValues.subCategoryId) : null,
        minPrice: searchValues.minPrice ? Number(searchValues.minPrice) : null,
        maxPrice: searchValues.maxPrice ? Number(searchValues.maxPrice) : null,
      };      

      const response = await update(data);
      handleSearch(response);

      if( response.length > 0) {
        setSearchResultsIsEmpty(false);
      } else {
        setSearchResultsIsEmpty(true);
      }

    } catch (error) {
      console.error('Error ', error)
    }
    
  }

  /** vérifie que une des valeurs de searchValues est différent est '' */
  const checkEmptySearchValuesState = () => {
    const result = Object.values(searchValues).some((element: string) => element !== '');
    return result;
  };

  useEffect(() => {

    // Afficher liste des options pour les marques page make-up et skin-care
    const getOptionsForBrands = (objCriteria: Brands[]) => {
      return objCriteria
        .filter((brand :Brands) => brand.categories.some((category : Categories) => category.id === parseInt(pathCategoryID)))
        .map((brand: Brands) => ({
          value: brand.id +'',
          label: brand.name,
        }));
    };

    // Afficher liste des options pour la page Nouveauté
    const getOptionsForNewThingsPage = (objCriteria :Brands[] | Categories[] | SubCategories[]) => {
      return objCriteria.map((e:any) => ({ 
        value: String(e.id),
        label: e.name 
      }))
    };

    // Afficher liste des options pour la page make-up et skin-care
    const getOptionsForMatchingWithPath = (objCriteria : Brands[] | Categories[] | SubCategories[]) => {
      return objCriteria
        .filter((e :any) => e.categoryId === Number(pathCategoryID))
        .map((e :any) => ({   
          value: String(e.id),
          label: e.name
        }))
    };
  
    /** Recupère toutes les critères pour filtrer */
    const getCriterias = () => {

      let brandsObjt :any = [];
      let categoriesObjt = [];
      let subCategoriesObj = [];

      if( pathUrl === '/make-up' || pathUrl === '/skin-care' ) {
        brandsObjt = getOptionsForBrands(criterias?.brands);        
        categoriesObjt = getOptionsForMatchingWithPath(criterias?.categories);
        subCategoriesObj = getOptionsForMatchingWithPath(criterias?.subCategories);
      } else {
        brandsObjt = getOptionsForNewThingsPage(criterias?.brands);
        categoriesObjt = getOptionsForNewThingsPage(criterias?.categories);
        subCategoriesObj = getOptionsForNewThingsPage(criterias?.subCategories);
      }

      setOptionsBrands([...optionsBrands, ...brandsObjt]);
      setOptionsCategory([...optionsCategory, ...categoriesObjt]);
      setOptionsSubCategory([...optionsSubCategory, ...subCategoriesObj]);

    }

    if(criteriasAreFetched.current && criteriasCompleted.current === false){   
      setSearchValues((prev) =>({
        ...prev,
        categoryId : pathCategoryID
      }))  

      getCriterias();
      criteriasCompleted.current = true;      
    }
    
  },[criterias, optionsBrands, optionsCategory, optionsSubCategory, criteriasAreFetched, pathUrl, searchValues ,pathCategoryID])


  return (
    <>
      <div className='container-search-group'>
        <div className='header-filter'>
          <div className={`form-search ${ pathUrl !== '/nouveaux' ?  'grid-4'  :''}`}>

            <InputSelect
              label='Marque:'
              name='brandId'
              value={searchValues.brandId}
              options={optionsBrands}
              onChange={handleChangeSearch}
            />


            {pathUrl === '/nouveaux' && (
                <InputSelect
                label='Catégorie:'
                name='categoryId'
                value={searchValues.categoryId}
                options={optionsCategory}
                onChange={handleChangeSearch}
              />
            )}

            <InputSelect
              label='Sous catégorie:'
              name='subCategoryId'
              value={searchValues.subCategoryId}
              options={optionsSubCategory}
              onChange={handleChangeSearch}
            />

            <DoubleInputPrice
              minValue={searchValues.minPrice}
              maxValue={searchValues.maxPrice}
              onChange={handleChangeSearch}
            />

            <div className='btn-search-zone'>
              <Button colorScheme='teal' variant='solid' className="primary mb-3" onClick={searchData} >
                <i className="fa-solid fa-magnifying-glass"></i>
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='remove-zone'>
          <Button size='sm' variant='ghost' onClick={resetSearch}>
            <i className="fa-regular fa-circle-xmark"></i>            
            Réinitialiser
          </Button>
      </div>

      {  checkEmptySearchValuesState() && searchResultsIsEmpty &&  (
        <div className='resp-error'>
          <span>
          Aucun éléments trouvés pour votre recherche
          </span>
        </div>
      )}
    </>

  )
};

export default SearchGroup;