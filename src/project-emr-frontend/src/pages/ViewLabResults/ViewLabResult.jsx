import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: '',
    label: '',
  },
  {
    value: '50',
    label: 'mg/dL',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const columns = [
  { id: 'name', label: 'Test Name', minWidth: 50 },
  { id: 'result', label: 'Current Result', minWidth: 50 },
  {
    id: 'unit',
    label: 'High/Low',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'reference',
    label: 'Reference Interval and Units',
    minWidth: 70,
    align: 'left',
    format: (value) => {
      return <Slider
      track="inverted"
      aria-labelledby="track-inverted-slider"
      getAriaValueText={valuetext}
      defaultValue={30}
      marks={marks}
    />
    },
  },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(name, result, unit, reference) {
  // const density = population / size;
  return { name, result, unit, reference};
}

const rows = [
  createData('Iron', '191', 'High', 3287263),
  createData('Ferritin', '100', '', 9596961),
  createData('RDW', '11.4', 'Low', 301340),
  createData('Platelets', '235', 'High', 9833520),
  createData('Glucose', '85', '', 9984670),
  createData('Creatinine', '0.64', '', 7692024),
  createData('Potassium', '4.7', '', 357578),
  createData('Calcium', '9.0', '', 70273),
  createData('Chloride', '102', '', 1972550),
  createData('HDL Cholesterol', '30', 'Low', 377973),
  createData('VLDL Cholesterol Cal', '18', '', 640679),
  createData('Vitamin B12', '1692', 'High', 242495),
  createData('Triglycerides', '100', '', 17098246),
  createData('Cholesterol', '191', '', 923768),
  createData('TSH', '2.230', '', 8515767),
];

const ViewLabResult = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ViewLabResult;