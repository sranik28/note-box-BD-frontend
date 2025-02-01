import { Button, Card, Col, Flex } from "antd";
import NoteForm from "../../components/form/NoteForm";
import NoteInput from "../../components/form/NoteInput";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schema/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {

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
              Login
            </h3>
            <NoteForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
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
                Login
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
              <p>Don't have an account? </p>
              <Link to="/register">Registration</Link>
            </div>
          </Col>
        </Flex>
      </Card>
    </div>
  )
}
