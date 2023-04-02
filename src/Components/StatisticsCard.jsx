import React from 'react';
import {
  Box, Grid, Stack,
} from '@mui/material';
import StatisticsSubCard from './StatisticsSubCard';

export default function StatisticsCard() {
  return (
    <Box>
      <h1>
        Traffic Statistics
      </h1>
      <h5>
        Summary
      </h5>
      <Grid>
        <StatisticsSubCard />
        <StatisticsSubCard />
        <StatisticsSubCard />
      </Grid>
    </Box>
  );
}
