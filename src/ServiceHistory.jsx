




import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Card, Container, Row, Col } from 'react-bootstrap';
import './ServiceHistory.css'; // Import your CSS file for styling

function ServiceHistory() {
  const [serviceHistory, setServiceHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServiceHistory();
  }, []);

  const fetchServiceHistory = async () => {
    try {
      // const response = await axios.get('/api/service-history');
      const response = await axios.get('https://backend-capstone-motorcycle.onrender.com/api/service-history');
      setServiceHistory(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching service history:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Service History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {serviceHistory.map((historyItem, index) => (
            <Col key={index}>
              <Card>
                <Card.Img variant="top" src={historyItem.image} alt={historyItem.serviceType} />
                <Card.Body>
                  <Card.Title>{historyItem.serviceType}</Card.Title>
                  <Card.Text>{historyItem.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated {historyItem.date}</small>
                  {/* Add reviews or other details here */}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ServiceHistory;

