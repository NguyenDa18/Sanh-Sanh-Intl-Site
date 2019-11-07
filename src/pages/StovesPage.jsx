import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import ReactMediumImg from 'react-medium-zoom';
import stovesImgs from '../data/stovesImgs';

const StovesPage = () => {
	return (
		<>
			<Jumbotron fluid>
        	<h2 className="header display-3">Stoves/Ovens</h2>
			</Jumbotron>
        	<Row>
        		{stovesImgs.map((item, i) => (
        			<Col xs="12" key={i} sm={{ size: 'auto', offset: 1 }}>
        				<ReactMediumImg style={{ width: '500px' }} src={item}/>
        			</Col>
        		))
        		}
        	</Row>
		</>
	);
};

export default StovesPage;