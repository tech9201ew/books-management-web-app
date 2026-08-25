import { Card } from 'react-bootstrap';

export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light mb-4">
        <Card.Body>
          <h4>{props.text}</h4>
          
          {props.subtext && (
            <>
              <br />
              <span className="text-muted">{props.subtext}</span>
            </>
          )}
        </Card.Body>
      </Card>
      <br />
    </>
  );
}