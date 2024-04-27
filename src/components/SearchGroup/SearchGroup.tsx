import React, { useState } from 'react'
import "./SaerchGroup.scss";
import { DoubleInputPrice, InputSelect } from '../ui';
import { Button } from '@chakra-ui/react';
import { usePathname } from '../../hooks/useNavigate';
import ProductsService from '../../services/productsService';

const SearchGroup = () => {

  const initialeState = {
    brandId: 5,
    categoryId: 1,
    subCategoryId: '',
    minPrice: '10',
    maxPrice: '70',
  };

  const [searchValues, setSearchValues] = useState(initialeState);

  const pathUrl = usePathname()

  const optionsBrands = [
    { value: "", label: "marque" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  const optionsCategory = [
    { value: "", label: "catégorie" },
    { value: 1, label: "Soin visage" },
    { value: 2, label: "Maquillage" },
  ];

  const optionsSubCategory = [
    { value: "", label: "sous catégorie" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];


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
  };

  const searchData = () => {

    try {

      const data = {
        brandId: searchValues.brandId ? Number(searchValues.brandId) : null,
        categoryId: searchValues.categoryId ? Number(searchValues.categoryId) : null,
        subCategoryId: searchValues.subCategoryId ? Number(searchValues.subCategoryId) : null,
        minPrice: searchValues.minPrice ? Number(searchValues.minPrice) : null,
        maxPrice: searchValues.maxPrice ? Number(searchValues.maxPrice) : null,
      };

      const response = ProductsService.getSearchProducts(data);

      console.log('response ', response);
      
    } catch (error) {
      console.error('Error ', error)
    }
    
  }



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
               )
            }

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
              <Button colorScheme='teal' variant='solid' onClick={searchData} >
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
    </>

  )
};

export default SearchGroup;