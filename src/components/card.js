import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import styled from 'styled-components'

const CardTitle = styled.h2`
    padding-bottom: 2%;
`;

const CardCopyright = styled.h4`
    padding-bottom 2%; 
`;


const NasaCard = props => {

    const data = props.data
    return(
    <Card>
        <CardImg top width="100%" src={data.hdurl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardCopyright>Taken by: {data.copyright}</CardCopyright>
          <CardText>{data.explanation}</CardText>
        </CardBody>
    </Card>

)};

export default NasaCard;