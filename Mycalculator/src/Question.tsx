import { Box, Paper, Tooltip, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Question = (props: { questionNo:number,questionName: string}) => {
  const [Hover, setHover] = useState(false);

  
  
  const ButtonUp = () => {
    setHover(true);
  };

  const ButtonDown = () => {
    setHover(false);
  };

  return (
   
      <Grid
        size={{ lg: 6 }}
        onMouseOver={() => {
          ButtonUp();
        }}
        onMouseLeave={() => {
          ButtonDown();
        }}
      >
        <Paper elevation={1}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid>
              <Typography>{props.questionName}</Typography>
            </Grid>

            {Hover && <Grid>
              <CheckIcon/>
            </Grid>}

            <Grid>
              <Stack direction="row" spacing={1}>
               {Hover &&  <EditOutlinedIcon/>}
              <Typography>20</Typography>
              </Stack>
            </Grid>
          </Grid>

        </Paper>
        {Hover == true && (
          <Button size="medium" startIcon={<CloseIcon />} >
            Remove
          </Button>
        )}
      </Grid>

  );
};

export default Question;
