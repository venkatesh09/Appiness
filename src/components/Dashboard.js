import React, {Component} from 'react';
import { TableBody, Table, TableRow, TableCell } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import TableHeader from './TableHeader';



const ColumnData = [
    {
      id: 'id',
      numeric: false,
      label: 'id',
    },
    {
      id: 'name',
      numeric: false,
      label: 'Name',
    },
    {
      id: 'age',
      numeric: false,
      label: 'Age',
    },
    {
      id: 'gender',
      numeric: false,
      label: 'Gender',
    },
    {
      id: 'email',
      numeric: false,
      label: 'Email',
    },
    {
      id: 'phoneNo',
      numeric: false,
      label: 'Mobile',
    },
  ];

const dashboardData = {
	 user: [{
			"id": 1,
			"name": "test1",
			"age": "11",
			"gender": "male",
			"email": "test1@gmail.com",
			"phoneNo": "9415346313"
		},
		{
			"id": 2,
			"name": "test2",
			"age": "12",
			"gender": "male",
			"email": "test2@gmail.com",
			"phoneNo": "9415346314"
		},
		{
			"id": 3,
			"name": "test3",

			"age": "13",
			"gender": "male",
			"email": "test3@gmail.com",
			"phoneNo": "9415346315"
		},
		{
			"id": 4,
			"name": "test4",
			"age": "14",
			"gender": "male",
			"email": "test4@gmail.com",
			"phoneNo": "9415346316"
		},
		{
			"id": 5,
			"name": "test5",
			"age": "15",
			"gender": "male",
			"email": "test5@gmail.com",
			"phoneNo": "9415346317"
		},
		{
			"id": 6,
			"name": "test6",
			"age": "16",
			"gender": "male",
			"email": "test6@gmail.com",
			"phoneNo": "9415346318"
		}
	]
}

const styles = {
    div: {
      display: 'flex',
      flexDirection: 'row wrap',
      width: '100%',
    },
    paperLeft: {
      flex: 5,
      height: '100%',
      marginLeft: 5,
      textAlign: 'center',
      padding: 2,
    },
    tableCell: {
      textAlign: 'center',
    },
    titleCell: {
      textAlign: 'left',
      paddingLeft: 30,
    },
  };

  
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            dashboardData,
        }
    }
    render(){
        const { dashboardData: { user } } = this.state;
        console.log(dashboardData, 'dashboardData');
        return(
        <div style={styles.paperLeft}>
        <h1> Dashboard</h1>
    <Grid container>
        <Grid item xs={12} md={12}>
          <Table>
            <TableHeader columns={ColumnData} cellStyle={styles.tableCell} />
            <TableBody>
              {
                user.map(item => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={item.id}
                  >
                    <TableCell style={styles.titleCell} component="th" scope="row" padding="none">{item.id}</TableCell>
                    <TableCell style={styles.tableCell} component="th" scope="row" padding="none">{item.name}</TableCell>
                    <TableCell style={styles.tableCell} component="th" scope="row" padding="none">{item.age}</TableCell>
                    <TableCell style={styles.tableCell} component="th" scope="row" padding="none">{item.gender}</TableCell>
                    <TableCell style={styles.tableCell} component="th" scope="row" padding="none">{item.email}</TableCell>
                    <TableCell style={styles.tableCell} component="th" scope="row" padding="none">{item.phoneNo}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        </Grid>
        </div>
        );
    }
} 


export default Dashboard;