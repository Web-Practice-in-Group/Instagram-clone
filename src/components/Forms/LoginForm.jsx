import React from "react";
import Instagram from "../Breadcrumbs/Icons/Instagram";
import Buttons from "../Buttons/Button";

import {
  CardContainer,
  AuthCard,
  AuthContainer,
  Logo,
  InputContainer,
  Input,
  Row,
  Col,
} from "../../assets/Elements";

function Login() {
  return (
    <CardContainer>
      <Row>
        <Col>
          <AuthContainer>
            <AuthCard>
              <Logo>
                <Instagram fill="white"/>
              </Logo>

              <InputContainer>
                <Input></Input>
                <Input></Input>
                <Buttons
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
  );
}

export default Login;
