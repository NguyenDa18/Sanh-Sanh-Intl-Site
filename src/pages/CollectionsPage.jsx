import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';
import collectionsImgs from '../data/collectionsImgs';

const CollectionsPage = () => {
	return (
        <>
        <Jumbotron fluid>
        	<h1 className="header display-3">Collections</h1>
        </Jumbotron>
        <Container fluid>
        	<Row>
        		{collectionsImgs.map((item, i) => (
        			<Col key={i} sm={{ size: 'auto', offset: 1 }}>
        				<ReactMediumImg style={{ width: '500px' }} src={item}/>
        			</Col>
        		))
        		}
        	</Row>
        </Container>
        </>
	);
};

export default CollectionsPage;