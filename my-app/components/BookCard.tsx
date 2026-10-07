import useSWR from 'swr';
import Error from 'next/error';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

// Define the interface for the work data
interface WorkData {
  title?: string;
  first_publish_date?: string;
  covers?: number[];
}

// Define the props for the BookCard component
interface BookCardProps {
  workId: string;
}

// BookCard component that fetches and displays book information based on the workId
export default function BookCard({ workId }: BookCardProps) {

  // Use SWR to fetch data from the Open Library API for the given workId
  const { data, error } = useSWR<WorkData>(`https://openlibrary.org/works/${workId}.json`);

  if (error) return <Error statusCode={404} />;

  if (!data) return null;

  if (Object.keys(data).length === 0) return <Error statusCode={404} />;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
        alt={data?.title || "Book Cover"}

        onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {

          const target = event.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/400x600?text=Cover+Not+Available";


          //onError={(event) => {
          //  event.target.onerror = null;
          //  event.target.src = "https://placehold.co/400x600?text=Cover+Not+Available";
        }}
      />
      <Card.Body>
        <Card.Title>{data?.title || ""}</Card.Title>

        <Card.Text>
          {data?.first_publish_date || "N/A"}
        </Card.Text>


        {/*
        Fix the button to use Link component correctly

        <Button as={Link} href={`/works/${workId}`} variant="primary">
          View Work
        </Button> */}

        <Link href={`/works/${workId}`} passHref legacyBehavior>
          <Button variant="primary">View Work</Button>
        </Link>



      </Card.Body>
    </Card>
  );
}