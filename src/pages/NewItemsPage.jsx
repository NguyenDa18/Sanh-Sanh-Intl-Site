import React from 'react';
import { Container, Row, Col, Jumbotron, Badge } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';
import newItemsImgs from '../data/newItemsImgs';

const NewItemsPage = () => {
	return (
        <>
        <Jumbotron fluid>
        	<h1 className="header"><Badge color="danger">New Items <Badge color="secondary">{`${newItemsImgs.length}`}</Badge></Badge></h1>
        </Jumbotron>
		<Container fluid>
        	<Row>
        		{newItemsImgs.map((item, i) => (
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

export default NewItemsPage;