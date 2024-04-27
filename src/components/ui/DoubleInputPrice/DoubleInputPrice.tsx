import './DoubleInputPrice.scss';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

type DoubleRangeSliderProps = {
    minValue:string, 
    maxValue:string, 
    onChange?: (value: any) => void;
}

const DoubleInputPrice = ({ minValue, maxValue , onChange }: DoubleRangeSliderProps) => {

  return (
    <div className='double-range-container'>
        <label>Prix:</label>
        <div className='input-group'>
            <div className='label-input-grp'>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        €
                    </InputLeftElement>
                    <Input type='number' value={minValue} placeholder='min' name='minPrice' onChange={onChange}   />
                </InputGroup>
            </div>
            <div className='cale'>
            </div>
            <div className='label-input-grp'>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        €
                    </InputLeftElement>
                    <Input type='number' value={maxValue} placeholder='max' name='maxPrice' onChange={onChange}/>
                </InputGroup> 
            </div>
        </div>
  
    </div>
  )
}

export default DoubleInputPrice;