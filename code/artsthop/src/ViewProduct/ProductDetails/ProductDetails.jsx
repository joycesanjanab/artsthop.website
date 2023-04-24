import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import { SlHandbag } from 'react-icons/sl';

const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='prod-cont'>
                <div className='prod-title'>Still Life</div>
                <div className='prod-price'>$49.99</div>
                <div className='prod-image'>
                    <img style={{ border: '1px solid black' }} src='/src/assets/Paintings/one.webp' height='100px' width='70px' alt='product image' />
                </div>
                <label className='prod-date'>March 09, 1993</label>
                <Button variant="dark" onClick={() => navigate('/products')} >Go back</Button>
            </div>
        </>
    )
}

export default ProductDetails