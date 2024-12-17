import Card from 'react-bootstrap/Card';
import './Equipe.css';

function Equipe() {
  return (
    <>
      <div className="center custom-content-padding margin-top-auto view-height-100">
        <div className='cards-layout'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>André</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Laura</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Kitty</Card.Title>
            </Card.Body>
          </Card>

        </div>


      </div>
    </>
  );
}

export default Equipe;
