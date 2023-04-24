import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import './ViewProduct.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductDesc from './ProductDesc/ProductDesc';
import ProductImages from './ProductImages/ProductImages';
import axios from 'axios';
import { imgList } from '../Data/data';
import { Slide } from 'react-slideshow-image';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const ViewProduct = () => {
    const navigate = useNavigate();

    const [texts, setTexts] = useState([]);
    const [pid, setPid] = useState();

    const params = useParams();
    // console.log('params', params.id);

    // setPid(params.id);

    useEffect(() => {
        setPid(params.id);
    }, []);

    const callBackend = () => {
        axios.get('http://localhost:4000/artsthop')
            .then(response => {
                setTexts(response.data);
                console.log(texts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];

    return (
        <>
            <div class="flex-container">
                <main className="view-main">
                    <div class="contents">
                        {imgList.map((img) => {
                            console.log('pid', pid);
                            console.log('imgid', img.id);
                            if (pid == img.id) {
                                return <img className="main-image" alt='product image' src={`/${img.img1}`} />
                            }
                        })}
                        {/* <div class="haha"><ProductImages /></div>
                        <div class="haha"><ProductImages /></div> */}
                    </div>
                    <div class="content"><ProductDesc /></div>
                    <div class="contents">
                        <div class="content-bt">
                        <img class="image-row" src='/src/assets/Paintings/one.webp' alt="product image"/>
                        {/* <img class="image-row" src='/src/assets/Paintings/one.webp' alt="product image"/> */}
                        
                            {/* <div class="image-row"><ProductImages /></div>
                            <div class="image-row"><ProductImages /></div> */}
                        </div>
                        <div class="content-bt">
                        <img class="image-row" src='/src/assets/Paintings/one.webp' alt="product image"/>
                        {/* <img class="image-row" src='/src/assets/Paintings/one.webp' alt="product image"/> */}
                            {/* <div class="image-row"><ProductImages /></div>
                            <div class="image-row"><ProductImages /></div> */}
                        </div>
                    </div>
                    <div class="content"><ProductDesc /></div>
                </main>
                <aside>
                    <ProductDetails />
                    <div>{texts.map(text => (
                        <>
                            <p> {text.product_title} </p>
                            <p> {text.product_description} </p>
                            <p> {text.product_price} </p>
                            <p> {text.product_quantity} </p>
                        </>
                    ))}</div>
                </aside>
            </div>
        </>
    )
}

export default ViewProduct