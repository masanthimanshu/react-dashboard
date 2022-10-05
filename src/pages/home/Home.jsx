import { Grid, Box, Container, Typography } from "@mui/material";
import chartOptions from "../../data/chartOptions.json";
import { Sidebar } from "../../components/Sidebar";
import chartData from "../../data/chartData.json";
import { Line } from "react-chartjs-2";

export const Home = () => {
  return (
    <>
      <Sidebar>
        <Grid container spacing={4} textAlign="center">
          <Grid item md={4}>
            <TopCard heading="DATA 1" text="35" />
          </Grid>
          <Grid item md={4}>
            <TopCard heading="DATA 2" text="35" />
          </Grid>
          <Grid item md={4}>
            <TopCard heading="DATA 3" text="35" />
          </Grid>
        </Grid>
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <Line data={chartData} options={chartOptions} />
        </Container>
      </Sidebar>
    </>
  );
};

const TopCard = ({ heading, text }) => {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4">
        <b>{heading}</b>
      </Typography>
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};
