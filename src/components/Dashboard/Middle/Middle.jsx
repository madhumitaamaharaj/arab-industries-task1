import React from 'react';
import Card from 'react-bootstrap/Card';

function Middle() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-start vh-100">
      <h2>Choose the plan that's just right for you!</h2>

      
      <div className="card-container">
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is the content of Card 1.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              This is the content of Card 2.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              This is the content of Card 3.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Middle;
