import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './Test.css'

const Test = () => {

    const { scrollY } = useScroll();

    const y2 = useTransform(scrollY, [700, 2000], [0, -250]);
    const y1 = useTransform(scrollY, [1100, 1300], [0, -250]);
    const y3 = useTransform(scrollY, [1350, 2650], [0, -250]);
    const y4 = useTransform(scrollY, [1750, 1950], [0, -250]);

    return (
        <div className='boxes'>
            <div className='box-container'>
                <motion.div className="box1" style={{ y: y1, x: 50 }} >
                <img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/one.webp' />
                </motion.div>
                <motion.div
                    className="box2"
                    style={{ y: y2, x: -50 }}
                ><img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/two.webp' /></motion.div>
                <p className='textbox'>Title: Still Life with Guitar <br />
                    Artist: Maria Rodriguez<br />
                    Year: 2012<br />
                    Medium: Acrylic on canvas<br />
                    Size: 40 cm x 50 cm (15.7 in x 19.7 in)<br />
                    Through her use of a muted color palette and careful rendering of details, Rodriguez creates a warm and intimate scene. The guitar is the focal point of the composition, with its wood grain and strings delicately painted. The vase of flowers and scattered objects provide subtle accents, while the use of light and shadow creates a sense of depth and dimensionality. Overall, Still Life with Guitar is a beautiful example of Rodriguez's talent and her ability to elevate ordinary objects into works of art.</p>
            </div>
            <div className='box-container-two'>
                <motion.div className="box1" style={{ y: y3, x: 50 }} >
                <img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/nine.webp' />
                </motion.div>
                <motion.div
                    className="box2"
                    style={{ y: y4, x: -50 }}
                ><img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/five.webp' /></motion.div>
                <p className='textbox'>Title: Still Life with Guitar <br />
                    Artist: Maria Rodriguez<br />
                    Year: 2012<br />
                    Medium: Acrylic on canvas<br />
                    Size: 40 cm x 50 cm (15.7 in x 19.7 in)<br />
                    Through her use of a muted color palette and careful rendering of details, Rodriguez creates a warm and intimate scene. The guitar is the focal point of the composition, with its wood grain and strings delicately painted. The vase of flowers and scattered objects provide subtle accents, while the use of light and shadow creates a sense of depth and dimensionality. Overall, Still Life with Guitar is a beautiful example of Rodriguez's talent and her ability to elevate ordinary objects into works of art.</p>
            </div>
        </div>
    )
}

export default Test