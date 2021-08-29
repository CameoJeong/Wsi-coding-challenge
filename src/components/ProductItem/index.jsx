import 'react-responsive-carousel/lib/styles/carousel.min.css'

import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import Modal from 'styled-react-modal'

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-top: 1.78em;
  flex-direction: column;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Image = styled.img`
  cursor: pointer;
`
const Name = styled.p`
  font-family: "GT-Eesti 3r",Arial,sans-serif;
  font-weight: 400;
  font-size: 1.802em;
  line-height: 1.25em;
  letter-spacing: 0.025em;
  margin: 10px 0;
  text-align: center;
`
const Price = styled.p`
  font-family: "GT-Eesti 3r",Arial,sans-serif;
  font-size: 17.7px;
  margin: 0 0 5px;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-align: center;
`
const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition : all 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`

const ProductItem = (props) => {
  const { item } = props

  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  function toggleModal(e) {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0)
      setTimeout(resolve, 300)
    })
  }

  // const images = [
  //   {
  //     original: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     thumbnail: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     sizes: {width: '100px', height: '100px'},
  //   },
  //   {
  //     original: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     thumbnail: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     sizes: {width: '100px', height: '100px'},
  //   },
  //   {
  //     original: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     thumbnail: 'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202117/0200/nova-bath-accessories-1-m.jpg',
  //     sizes: {width: '100px', height: '100px'},
  //   },
  // ]

  return (
    <>
      <Product>
        <Name>{item['name']}</Name>
        {
          item.priceRange?.selling?.low && item.priceRange?.selling?.high ?
            <Price>${item.priceRange?.selling?.low} ~ ${item.priceRange?.selling?.high}</Price>
            :
            <Price>Price is unknown</Price>
        }
        <Image src={item['hero']['href']} alt='Hero Image' onClick={toggleModal} />
      </Product>

      <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
          className='modal'
        >
          <Carousel dynamicHeight={true} showIndicators={false} showArrows={false} className='carousel'>
            {item['images'].map(image => <img src={image.href} alt={image.alt} />)}
          </Carousel>
        </StyledModal>
    </>
  )
}

export default ProductItem