import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

type B = string[];

const Standard = () => {
  const b: B = [
    "%",
    "1/x",
    "7",
    "4",
    "1",
    "+/-",
    "CE",
    "x²",
    "8",
    "5",
    "2",
    "0",
    "C",
    "1/x1",
    "9",
    "6",
    "3",
    ".",
    "?",
    "/",
    "*",
    "-",
    "+",
    "=",
  ];

  return (
    <Stack spacing={45}>
      <Box>this is a box for result</Box>
      <Grid item container coloumn={{ md: 12, sm: 12, xs: 12 }}>
        {b.map((d: string) => {
          return (
            <Grid item lg={3} md={3} sm={3} xs={3} key={d}>
              <Button sx={{ width: "100%" }} variant="contained">
                {d}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Standard;
