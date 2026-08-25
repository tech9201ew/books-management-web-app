/*********************************************************************************
 * WEB422 – Assignment 3
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: YI-LUN,WU     Student ID: 173968231 Date: 2026-04-05
 *
 ********************************************************************************/


import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      author: "",
      title: "",
      subject: "",
      language: "",
      first_publish_year: ""
    }
  });

  function onSubmit(data) {
    router.push({
      pathname: '/books',
      query: Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== ''))
    });
  }

  return (
    <>
      <PageHeader text="Search" subtext="Search for books via the OpenLibrary API" />
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control 
                type="text" 
                {...register("author", { required: true })} 
                className={errors.author ? "is-invalid" : ""}
              />
              {errors.author && <div className="invalid-feedback">Author is required.</div>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" {...register("title")} />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" {...register("subject")} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control type="text" {...register("language")} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>First Publish Year</Form.Label>
              <Form.Control type="text" {...register("first_publish_year")} />
            </Form.Group>
          </Col>
        </Row>
        
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
}