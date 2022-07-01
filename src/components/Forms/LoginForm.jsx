import React from "react";
import Instagram from "../Breadcrumbs/Icons/Instagram";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";

import {
  CardContainer,
  AuthCard,
  AuthContainer,
  Logo,
  InputContainer,
  Row,
  Col,
} from "../../assets/Elements";
import Footer from "../Footer/Footer";

function LoginForm() {
  return (
    <>
        <CardContainer>
      <Row>
        <Col>
          <AuthContainer>
            <AuthCard>
              <Logo>
                <Instagram fill="white" />
              </Logo>

              <InputContainer>
                <Input
                  type="user"
                  name="user"
                  id="user"
                  placeholder="Usuario o correo electronico"
                ></Input>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                ></Input>
                <Button
                  border="transparent"
                  margin="10px 0 0 0"
                  color="#fff"
                  active="#0167ac"
                  background="#0095f6"
                  name="Iniciar Sesion"
                  width="100%"
                />
              </InputContainer>
            </AuthCard>
            <AuthCard>
              <InputContainer>
                <p>Dont have an account?</p>
              </InputContainer>
            </AuthCard>
          </AuthContainer>
        </Col>
      </Row>
    </CardContainer>
    <Footer />
    </>
  );
}

export default LoginForm;
