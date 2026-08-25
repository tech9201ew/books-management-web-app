import useSWR from 'swr';
import Error from 'next/error';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function BookCard({ workId }) {
  const { data, error } = useSWR(`https://openlibrary.org/works/${workId}.json`);

  if (error) return <Error statusCode={404} />;
  
  if (!data) return null;

  if (Object.keys(data).length === 0) return <Error statusCode={404} />;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
        alt={data?.title || "Book Cover"}
        onError={(event) => {
          event.target.onerror = null;
          event.target.src = "https://placehold.co/400x600?text=Cover+Not+Available";
        }}
      />
      <Card.Body>
        <Card.Title>{data?.title || ""}</Card.Title>
        
        <Card.Text>
          {data?.first_publish_date || "N/A"} 
        </Card.Text>
        
        <Button as={Link} href={`/works/${workId}`} variant="primary">
          View Work
        </Button>
      </Card.Body>
    </Card>
  );
}