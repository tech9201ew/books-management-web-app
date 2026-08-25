import { Card } from "react-bootstrap";
import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const workID = "OL453657W";

  const res = await fetch(`https://openlibrary.org/works/${workID}.json`);
  const data = await res.json();

  return {
    props: {
      book: data,
    },
  };
}

export default function About({ book }) {
  return (
    <>
      <PageHeader text="About the Developer: YI-LUN,WU" />

      <Card>
        <Card.Body>
          <p>This is an assignment for WEB422.</p>
          <p>
            The book featured below is "The Colour of Magic" by Terry Pratchett.
          </p>
        </Card.Body>
      </Card>
      <br />

      <BookDetails book={book} workId="OL453657W" showFavouriteBtn={false} />
    </>
  );
}
