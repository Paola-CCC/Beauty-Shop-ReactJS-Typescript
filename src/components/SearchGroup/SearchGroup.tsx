import React from 'react'
import "./SaerchGroup.scss" ;
import { InputSelect } from '../ui';

 const SearchGroup = () => {
  const optionsQuantity = [
    { value: 0, label: "sélectionnez la quantité" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
];

  return (
    <div className='container-search-group'>
        
        <div className='header-filter'>
          {/* <div className='filter-title'>
            <p>FILTRES</p>
          </div> */}

          <div className='form-search'>

              <InputSelect
                label='Marque:'
                name='brands'
                options={optionsQuantity}
              />

              <InputSelect
                label='Catégorie:'
                name='category'
                options={optionsQuantity}
              />

              <InputSelect
              label='Texture:'
              name='texture'
              options={optionsQuantity}
              />

              <InputSelect
              label='Prix:'
              name='texture'
              options={optionsQuantity}
              />
      
          </div>

        </div>

    </div>
  )
} ;

export default SearchGroup;