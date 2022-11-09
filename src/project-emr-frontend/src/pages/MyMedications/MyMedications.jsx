import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import HotelIcon from '@mui/icons-material/Hotel';
import CheckIcon from '@mui/icons-material/Check';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './MyMedications.css';
import PageTitle from '../../components/PageTitle';

function createData(
  medicationName,
  morningMeds,
  afternoonMeds,
  nightMeds,
  bedtimeMeds,
  asNeededMeds,
) {
  return {
    medicationName,
    morningMeds,
    afternoonMeds,
    nightMeds,
    bedtimeMeds,
    asNeededMeds,
    history: [
      {
        indication: 'Anti-Platelet',
        lastTaken: '10/26/2022 0800',
        refill: 1,
      },
      {
        indication: 'Anti-Hypertensive',
        lastTaken: '10/25/2022 2200',
        refill: 1,
      },
    ],
  };
}

const useStyles = makeStyles({
  root: {
    fontSize: '15px !important',
    textAlign: 'center !important'
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className={classes.root}>
          {row.medicationName}
        </TableCell>
        <TableCell className={classes.root}>{row.morningMeds}</TableCell>
        <TableCell className={classes.root}>{row.afternoonMeds}</TableCell>
        <TableCell className={classes.root}>{row.nightMeds}</TableCell>
        <TableCell className={classes.root}>{row.bedtimeMeds}</TableCell>
        <TableCell className={classes.root}>{row.asNeededMeds}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Medication Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.root}>Indication</TableCell>
                    <TableCell className={classes.root}>Last Taken</TableCell>
                    <TableCell className={classes.root}>Refill</TableCell>
                    <TableCell className={classes.root}>More Information</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow className={classes.root} key={historyRow.indication}>
                      <TableCell className={classes.root} component="th" scope="row">
                        {historyRow.indication}
                      </TableCell>
                      <TableCell className={classes.root}>{historyRow.lastTaken}</TableCell>
                      <TableCell className={classes.root}>{historyRow.refill}</TableCell>
                      <TableCell className={classes.root}>{historyRow.moreInformation} <HelpOutlineIcon fontSize= 'medium'style={{ color: "#424242" }}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Aspirin  80 mg, once daily (oral)', <CheckIcon fontSize= 'large' />, null, null, null, null),
  createData('Lipitor 40 mg, once daily at bedtime (oral) ', null, null, null, <CheckIcon fontSize= 'large' />, null),
  createData('Novolog 10 units, thrice daily before meals (Subcutaneous Injection)', <CheckIcon fontSize= 'large' />, <CheckIcon fontSize= 'large' />, <CheckIcon fontSize= 'large' />, null, null),
  createData('Metoprolol 25 mg, twice daily (oral)', <CheckIcon fontSize= 'large' />, null, <CheckIcon fontSize= 'large' />, null, null),
  createData('Metformin 50 mg, thrice daily (oral)', <CheckIcon fontSize= 'large' />, <CheckIcon fontSize= 'large' />, <CheckIcon fontSize= 'large' />, null, null),
  createData('Percocet 5mg/325mg, every 6 hours as needed for pain (oral)', null, null, null, null, <CheckIcon fontSize= 'large' />),
];

const MyMedications = () => {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="My Medications"/>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell className={classes.root}><WbSunnyIcon fontSize='large' style={{ color: "#b2a429" }}/></TableCell>
              <TableCell className={classes.root}><WbTwilightIcon fontSize='large' style={{ color: "#b26a00" }}/></TableCell>
              <TableCell className={classes.root}><NightsStayIcon fontSize='large' style={{ color: "#2c387e" }} /></TableCell>
              <TableCell className={classes.root}><HotelIcon fontSize='large' style={{ color: "#424242" }}/></TableCell>
              <TableCell className={classes.root}></TableCell>
            </TableRow>
            <TableRow className={classes.root}>
              <TableCell />
                <TableCell className={classes.root}>MEDICATION NAME</TableCell>
                <TableCell className={classes.root}>MORNING</TableCell>
                <TableCell className={classes.root}>AFTERNOON</TableCell>
                <TableCell className={classes.root}>NIGHT</TableCell>
                <TableCell className={classes.root}>BEDTIME</TableCell>
                <TableCell className={classes.root}>AS NEEDED</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.medicationName} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", fontWeight: "550", minWidth: "100px",}} variant="contained" className='btn'>Go Back</Button></Link>
    </>
  );
}

export default MyMedications; 
