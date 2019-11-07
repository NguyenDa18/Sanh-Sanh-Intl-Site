import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';

const SitePage = ({ title }) => {
	const photos = [];

	return (
        <>
        <Jumbotron fluid>
        	<h1 className="header display-3">{title}</h1>
        </Jumbotron>
        <Container fluid>
        	<Row>
        		{photos.map((item, i) => (
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

export default SitePage;