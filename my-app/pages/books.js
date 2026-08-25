/*********************************************************************************
 * WEB422 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: YI-LUN,WU     Student ID: 173968231 Date: 2026-02-06
 *
 ********************************************************************************/

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Pagination, Table } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export default function Books() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const router = useRouter();
  let queryString = { ...router.query };
  let qParts = [];
  Object.entries(queryString).forEach(([key, value]) => {
    qParts.push(`${key}:${value}`);
  });

  if (qParts.length > 0) {
    queryString = qParts.join(' AND ');
  }

  const author = "Terry Pratchett";

  const { data, error } = useSWR(
    `https://openlibrary.org/search.json?q=${queryString}&page=${page}&limit=10`,
  );

  useEffect(() => {
    if (data) {
      setPageData(data.docs);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader 
        text="Search Results" 
        subtext={Object.keys(router.query).map(key => `${key}: ${router.query[key]}`).join(' | ')} 
      />

      <Table striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>First Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((book) => (
            <tr key={book.key} onClick={() => router.push(`${book.key}`)}>
              <td>{book.title}</td>
              <td>{book.first_publish_year || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
