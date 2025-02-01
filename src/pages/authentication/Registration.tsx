import { Button, Card, Col, Flex } from "antd";
import NoteForm from "../../components/form/NoteForm";
import NoteInput from "../../components/form/NoteInput";
import { Link } from "react-router-dom";

export default function Registration() {

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="container">
      <Card className="customForm">
        <Flex justify="center" align="middle">
          <Col span={8}>
            <h3
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              Registration
            </h3>
            <NoteForm
              onSubmit={onSubmit}
              // resolver={zodResolver(registrationSchema)}
            >
              <NoteInput
                type="text"
                placeholder="Enter your name"
                label="Enter your name"
                name="name"
              />
              <NoteInput
                type="text"
                placeholder="Enter your email"
                label="Enter your email"
                name="email"
              />
              <NoteInput
                type="password"
                placeholder="Enter your password"
                label="Enter your password"
                name="password"
              />
              <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                Registration
              </Button>
            </NoteForm>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "5px",
                marginTop: "10px",
              }}
            >
              <p>Already have an account? </p>
              <Link to="/login">Login</Link>
            </div>
          </Col>
        </Flex>
      </Card>
    </div>
  )
}

