import { Box } from "@mui/material";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridColDef} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataNotes } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import './ProgressNotes.css'

const ProgressNotes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  
  const columns = [
    {
      field: "typeOfVisit",
      headerName: "Type of Visit",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "date",
      headerName: "Date",
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
      field: "viewProgressNotes",
      headerName: "View Progress Notes",
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
      
          navigate("/view-progressnotes");
        }  

        return <Button onClick={onClick} sx={{color: 'blue'}}>View Progress Note</Button>;
      },
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="Progress Notes"
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
            backgroundColor: colors.greenAccent[500],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[500],
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
          rows={mockDataNotes}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          />
      </Box>
      <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", backgroundColor: colors.greenAccent[400], fontWeight: "550", minWidth: "100px",}} 
          variant="contained" className='btn'>Go Back</Button></Link>
    </Box>

  );
};

export default ProgressNotes;