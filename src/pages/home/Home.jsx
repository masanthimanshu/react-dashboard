import { Grid, Box, Container, Typography } from "@mui/material";
import chartOptions from "./data/chartOptions.json";
import { Sidebar } from "../../components/Sidebar";
import chartData from "./data/chartData.json";
import { Line } from "react-chartjs-2";

export const Home = () => {
  return (
    <Sidebar>
      <Grid container spacing={4} textAlign="center">
        <Grid item md={3}>
          <TopCard heading="Data 1" text="35" />
        </Grid>
        <Grid item md={3}>
          <TopCard heading="Data 2" text="35" />
        </Grid>
        <Grid item md={3}>
          <TopCard heading="Data 3" text="35" />
        </Grid>
        <Grid item md={3}>
          <TopCard heading="Data 4" text="35" />
        </Grid>
      </Grid>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Line data={chartData} options={chartOptions} />
      </Container>
    </Sidebar>
  );
};

const TopCard = ({ heading, text }) => {
  return (
    <Box
      sx={{
        p: 2.5,
        color: "white",
        borderRadius: 2,
        bgcolor: "black",
      }}
    >
      <Typography variant="h5">
        <b>{heading}</b>
      </Typography>
      <br />
      <Typography variant="h5">{text}</Typography>
    </Box>
  );
};
