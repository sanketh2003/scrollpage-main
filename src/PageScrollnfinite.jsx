import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

function PageScrollnfinite(props) {
  return (
    <Card className='d' >
      <div className='cart'>
        <Card.Img className="image" variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.text}</Card.Title>
          <Card.Text>
            {props.text1}
          </Card.Text>
          <Button variant="primary" href={props.href}><b>Book It</b></Button>
        </Card.Body>
      </div>

    </Card>
  );
}

export default PageScrollnfinite;