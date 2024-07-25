<<<<<<< HEAD
import React from "react";

import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";
=======
import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
<<<<<<< HEAD
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
=======
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb
    </div>
  </div>
);

export default Pie;
