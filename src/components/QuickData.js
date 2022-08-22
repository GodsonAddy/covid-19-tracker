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

  const lists = [
    {
      id: 1,
      name: "COUNTRY",
      topic: "NIGERIA",
      color: "#4caf50",
    },
    {
      id: 2,
      name: "TOTAL SAMPLES TESTED",
      topic: covidResults?.totalSamplesTested,
      color: "#9c27b0",
    },
    {
      id: 3,
      name: "TOTAL CONFIRMED CASES",
      topic: covidResults?.totalConfirmedCases,
      color: "#ffc107",
    },
    {
      id: 4,
      name: "TOTAL ACTIVE CASES",
      topic: covidResults?.totalActiveCases,
      color: "#2196f3",
    },
    {
      id: 5,
      name: "TOTAL DISCHARGED",
      topic: covidResults?.discharged,
      color: "#00c853",
    },
    {
      id: 6,
      name: "TOTAL DEATH",
      topic: covidResults?.death,
      color: "#E60000",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* LISTS */}

            {lists?.map(({ id, color, topic, name }) => (
              <Grid item key={id} xs={12} sm={4} md={6}>
                <Card
                  key={id}
                  raised
                  sx={{
                    backgroundColor: color,
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
                      {name}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                      {topic}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default QuickData;
