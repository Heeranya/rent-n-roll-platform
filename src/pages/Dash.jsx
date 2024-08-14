import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#8884d8', '#82ca9d', '#ff6327'];

const lineChartData = [
  { name: 'Jan', Bookings: 400, expenses: 2400 },
  { name: 'Feb', Bookings: 300, expenses: 1390 },
  { name: 'Mar', Bookings: 200, expenses: 2800 },
  { name: 'Apr', Bookings: 278, expenses: 3900 },
  { name: 'May', Bookings: 189, expenses: 4800 },
  { name: 'Jun', Bookings: 290, expenses: 3800 },
  { name: 'Jul', Bookings: 340, expenses: 4300 },
];

const barChartData = [
  { name: '4 Seater', value: 120 },
  { name: '7 Seater', value: 146 },
  { name: 'Hill Climbers', value: 78 },
];

const pieChartData = [
  { name: '4 Seater', value: 120 },
  { name: '7 Seater', value: 146 },
  { name: 'Hill Climbers', value: 78 },
];

const doughnutChartData = [
  { name: '4 Seater', value: 120 },
  { name: '7 Seater', value: 146 },
  { name: 'Hill Climbers', value: 78 },
];

function Dash() {
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get('http://localhost:9001/bookings/getbooking');
        setRecentTransactions(response.data);
      } catch (error) {
        console.error('Error fetching recent bookings:', error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        {/* Dashboard Title or Any Other Information */}
      </Box>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Booking and Petrol Expenses
            </Typography>
            <LineChart
              width={400}
              height={240}
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Bookings" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Car Type Distribution
            </Typography>
            <BarChart
              width={400}
              height={240}
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Car Type Distribution (Pie Chart)
            </Typography>
            <PieChart width={400} height={240}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Doughnut Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Cars vs Booking (Doughnut Chart)
            </Typography>
            <PieChart width={400} height={240}>
              <Pie
                data={doughnutChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {doughnutChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Recent Bookings
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Pickup</TableCell>
                    <TableCell>Drop</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>Num. of Days</TableCell>
                    <TableCell>Occasion</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.pick_date}</TableCell>
                      <TableCell>{transaction.drop_date}</TableCell>
                      <TableCell>{transaction.username}</TableCell>
                      <TableCell>{transaction.num_days}</TableCell>
                      <TableCell>{transaction.occasion}</TableCell>
                      <TableCell>₹{transaction.total_price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dash;
