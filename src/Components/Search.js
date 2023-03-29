import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
 
const searchBoxWidth = {
		paddingLeft: "20px",
};

const Search = () => {
	
	return (
		  <div>
				<Container>
					<Row>
						<Col>
								<Form.Control size="lg" type="text" placeholder="City"  style={{searchBoxWidth}}/>
								<br />
						</Col>
						<Col>
							<button className="btn btn-secondary">Submit</button>
						</Col>
					</Row>
				</Container>
			</div>
	)
}

export default Search