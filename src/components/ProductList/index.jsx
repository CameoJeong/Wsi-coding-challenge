import React from 'react'
import styled from 'styled-components'
import { BaseModalBackground, ModalProvider } from 'styled-react-modal'

import ProductItem from '@/components/ProductItem'

import serverData from '../../serverdata'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 100px 5%;
  justify-content: space-between;
`
const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease-in-out;
`

const ProductList = () => {
  // console.log(serverData['id'])
  // console.log(serverData['name'])
  // console.log(serverData['categoryType'])
  // console.log(serverData['groups'])
  // console.log(serverData['totalPages'])
  // console.log(serverData['categories'])

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Container>
        {serverData['groups'].map(item => <ProductItem key={item['id']} item={item} />)}
      </Container>
    </ModalProvider>
  )
}

export default ProductList
