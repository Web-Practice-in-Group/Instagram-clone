import React, { useState } from "react";
import Child from "./Child";
import { Container, Card, Text } from "@nextui-org/react";
function Parent() {
  const [count, setCount] = useState();
  return (
    <div>
      <Container css={{ marginTop: "2rem" }}>
        <Card css={{ $$cardColor: "$colors$primary" }}>
          <Card.Body>
            <Text h1 color="white">
              Component Parent
            </Text>
            <Text h4 color="white">
              <p>count: {count}</p>
            </Text>
          </Card.Body>
          <Container>
            <Card
              css={{ $$cardColor: "$colors$warning", margin: "0 0 2rem 0" }}
            >
              <Card.Body>
                <Text h3 color="white">
                  <Child setCount={setCount}/>
                </Text>
              </Card.Body>
            </Card>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
export default Parent;
