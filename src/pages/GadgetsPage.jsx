import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';
import gadgetImgs from '../data/gadgetsImgs';

const GadgetsPage = () => {
	return (
        <>
        <Jumbotron fluid>
        	<h1 className="header display-3">Kitchen Utensils</h1>
        </Jumbotron>
        <Container fluid>
        	<Row>
        		{gadgetImgs.map((item, i) => (
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

export default GadgetsPage;