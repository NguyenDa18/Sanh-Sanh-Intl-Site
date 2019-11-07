import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';
import bowlsImgs from '../data/bowlsImgs';

const BowlsPage = () => {
	return (
        <>
        <Jumbotron fluid>
        	<h1 className="header display-3">Bowls/Baskets</h1>
        </Jumbotron>
        <Container fluid>
        	<Row>
        		{bowlsImgs.map((item, i) => (
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

export default BowlsPage;