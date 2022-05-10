import React from 'react';
import styled from 'styled-components/native'

export default function AvatarProduct({ image }) {
    return (
        <ProductAvatar 
            source={image}>
        </ProductAvatar>
    )
}

const ProductAvatar = styled.Image`
    width: 80;
    height: 80;
    border-radius: 20%;
`
