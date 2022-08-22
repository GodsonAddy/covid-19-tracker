import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";

function QuickData() {
  const { covidResults } = useSelector((state) => state.covid);

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <Card
                raised
                sx={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    COUNTRY
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    NIGERIA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card
                raised
                sx={{
                  backgroundColor: "#9c27b0",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    TOTAL SAMPLES TESTED
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    {covidResults?.totalSamplesTested}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card
                raised
                sx={{
                  backgroundColor: "#ffc107",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    TOTAL CONFIRMED CASES
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    {covidResults?.totalConfirmedCases}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card
                raised
                sx={{
                  backgroundColor: "#2196f3",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    TOTAL ACTIVE CASES
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    {covidResults?.totalActiveCases}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card
                raised
                sx={{
                  backgroundColor: "#00c853",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    TOTAL DISCHARGED
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    {covidResults?.discharged}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card
                raised
                sx={{
                  backgroundColor: "#e60000",
                  color: "white",
                  borderRadius: 5,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                    TOTAL DEATH
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                    {covidResults?.death}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default QuickData;
