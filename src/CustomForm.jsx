import { Form, Button, Container } from 'react-bootstrap';

function CustomForm() {

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <style>
          {`
            .form-check-input[type="radio"] {
              background-color: transparent;
              border: 2px solid white;
            }
            .form-check-input[type="radio"]:checked {
              background-color: #0d6efd;
              border-color: #0d6efd;
              background-image: none;
            }
          `}
        </style>
        <Form className="p-4 rounded-lg" style={{
          width: '320px',
          backgroundColor: '#1a1a1a',
          border: '2px solid rgb(255, 255, 255)',
        }}>
        
        <Form.Group className="mb-4">
          <Form.Label className="text-white fs-5 mb-3">Purpose:</Form.Label>
          <div className="d-flex gap-4">
            <Form.Check
              type="radio"
              name="purpose"
              label="Client"
              id="client"
              defaultChecked
              className="text-white"
               
                
              />
              <Form.Check
                type="radio"
                name="purpose"
                label="Group"
                id="group"
                className="text-white"
                
              />
              <Form.Check
                type="radio"
                name="purpose"
                label="Agent"
                id="agent"
                className="text-white"
                
              />
            </div>
          </Form.Group>

         
          <Form.Group className="mb-4">
            <Form.Label className="text-white fs-5 mb-3">Label:</Form.Label>
            <Form.Control
              type="text"
              name="label"
              className="text-white border-secondary"
              style={{ backgroundColor: '#1a1a1a' }}
            />
            <small className="text-secondary mt-1 d-block">
              Please write label to here.
            </small>
          </Form.Group>

         
          <Form.Group className="mb-4">
            <Form.Label className="text-white fs-5 mb-3">Key:</Form.Label>
            <Form.Control
              type="text"
              name="key"
              className="text-white border-secondary"
              style={{ backgroundColor: '#1a1a1a' }}
            />
            <small className="text-secondary mt-1 d-block">
              Please write key to here.
            </small>
          </Form.Group>

          
          <Form.Group className="mb-4">
            <Form.Label className="text-white fs-5 mb-3">Status:</Form.Label>
            <div className="d-flex gap-4">
              <Form.Check
                type="radio"
                name="status"
                label="Active"
                id="active"
                defaultChecked
                className="text-white"
              />
              <Form.Check
                type="radio"
                name="status"
                label="Passive"
                id="passive"
                className="text-white"
              />
            </div>
          </Form.Group>

          
          <Button 
            variant="success" 
            className="w-100"
            style={{ backgroundColor: '#2ea043' }}
          >
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CustomForm;