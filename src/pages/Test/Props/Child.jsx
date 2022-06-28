import React from "react";
import { Button, Grid } from "@nextui-org/react";

function Child({ setCount }) {
  return (
    <div>
      Component Child
      <Grid.Container gap={2}>
        <Grid>
          <Button auto size="sm" onClick={() => setCount(1)}>
            1
          </Button>
        </Grid>
        <Grid>
          <Button auto size="sm" onClick={() => setCount(2)}>
            2
          </Button>
        </Grid>
        <Grid>
          <Button auto size="sm" onClick={() => setCount(3)}>
            3
          </Button>
        </Grid>
        <Grid>
          <Button auto size="sm" onClick={() => setCount(4)}>
            4
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}
export default Child;
