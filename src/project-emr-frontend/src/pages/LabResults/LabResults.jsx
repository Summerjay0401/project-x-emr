import { Box } from "@mui/material";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridColDef} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import './LabResults.css';



// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  
  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "testName",
      headerName: "Test Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "serviceDate",
      headerName: "Service Date",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "provider",
      headerName: "Provider",
      flex: 1,
    },
    {
      field: "practice",
      headerName: "Practice",
      flex: 1,
    },
    {
      field: "finalReportDate",
      headerName: "Final Report Date",
      flex: 1,
    },
    {
      field: "finalResults",
      headerName: "Final Results",
      flex: 1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  
          const { api } = params;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
            );
      
          navigate("/view-lab-result");
        }  

        return <Button onClick={onClick} sx={{color: 'blue'}}>View Result</Button>;
      },
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="Dan's Laboratory Results"
        subtitle=""
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          />
      </Box>
    </Box>

  );
};

export default Contacts;