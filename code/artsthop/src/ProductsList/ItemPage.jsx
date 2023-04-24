import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Item from '../ProductsList/Item'
import { SlHandbag } from 'react-icons/sl';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';
import './ProductList.css'

const ItemPage = ({ items, onAddToCart }) => {

  const imgList = [
    {
      id: 1,
      title: 'TEST 1',
      description: '12x13 Oil painting displaying still life.',
      price: 12,
      img1: 'src/assets/Paintings/one.webp',
      img2: 'src/assets/Paintings/two.webp'
    },
    {
      id: 2,
      title: 'TEST 1',
      description: '12x13 Oil painting displaying still life.',
      price: 12,
      img1: 'src/assets/Paintings/three.webp',
      img2: 'src/assets/Paintings/four.webp'
    },
    {
      id: 3,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/five.webp',
      img2: 'src/assets/Paintings/six.webp'
    },
    {
      id: 4,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/seven.webp',
      img2: 'src/assets/Paintings/eight.webp'
    },
    {
      id: 5,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/one.webp',
      img2: 'src/assets/Paintings/two.webp'
    },
    {
      id: 6,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/three.webp',
      img2: 'src/assets/Paintings/four.webp'
    },
    {
      id: 7,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/five.webp',
      img2: 'src/assets/Paintings/six.webp'
    },
    {
      id: 8,
      title: 'TEST 1',
      price: '$12',
      img1: 'src/assets/Paintings/seven.webp',
      img2: 'src/assets/Paintings/eight.webp'
    },
  ];

  const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    return (
      <div className="card-img">
        <img
          id='product-img'
          onMouseOver={() => {
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = primaryImg;
          }}
          src={primaryImg}
          alt=""
          ref={imageRef}
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    )
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to view more details
    </Tooltip>
  );

  const [imagesData, setImagesData] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    const getImagesData = async () => {
      try {
        // const res = await axios.get('http://localhost:3000/getimage/TEST IMAGE 1',
        const res = await axios.get('http://localhost:3000/getall',
        );
        setImagesData(res.data);
        console.log(res.data[0].img)

      } catch (e) {
        console.log(e);
      }
    };
    getImagesData();
  }, []);

  return (
    <>
      <div >
        {/* <h3 className="productstyle">Products List Page</h3> */}
        <div className='pageStyle'>
          <Row>
            {imgList.map((eachImgData) => (
              <Col key={eachImgData.id} xs={12} md={6} lg={3} >
                <OverlayTrigger
                  placement="auto"
                  delay={{ show: 10, hide: 10 }}
                  overlay={renderTooltip}
                >
                  <div className="image-class">
                    <a href={`/view/${eachImgData.id}`}>
                      {/* <a href='/view/1'> */}
                      {/* <a onClick={() => navigate('/view')}> */}
                      <ImageToggleOnMouseOver
                        primaryImg={eachImgData.img1}
                        secondaryImg={eachImgData.img2}
                        alt="product images" />
                    </a>
                    <div className="product-content">
                      <div className="prod-text">
                        <p style={{ marginBottom: 0 }}>{eachImgData.title}</p>
                        <label style={{ color: 'red' }}>{eachImgData.price}</label>
                      </div>
                      <Button className="prod-btn" variant="dark" onClick={() => onAddToCart(eachImgData)} ><SlHandbag /> Add to cart</Button>
                    </div>
                  </div>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default ItemPage;