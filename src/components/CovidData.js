import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";

function CovidData() {
  const { isLoading, covidResultsStates } = useSelector((state) => state.covid);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "state",
      headerName: "State",
      width: 150,
    },
    {
      field: "confirmedCases",
      headerName: "Confirmed Cases",
      width: 200,
    },
    {
      field: "casesOnAdmission",
      headerName: "Cases on Admission",
      type: "number",
      width: 180,
    },
    {
      field: "discharged",
      headerName: "Discharged",
      type: "number",
      width: 180,
    },
    {
      field: "death",
      headerName: "Death",
      type: "number",
      width: 160,
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ height: 400, width: "100%", bgcolor: "white" }}>
          <DataGrid
            getRowId={(row) => row?._id}
            rows={covidResultsStates}
            columns={columns}
            initialState={{
              pinnedColumns: { left: ["title"], right: ["actions"] },
            }}
            components={{
              Toolbar: GridToolbar,
              LoadingOverlay: CircularProgress,
            }}
            disableSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
            loading={isLoading}
          />
        </Box>
      </Container>
    </>
  );
}

export default CovidData;
