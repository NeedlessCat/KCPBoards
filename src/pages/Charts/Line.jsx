<<<<<<< HEAD
import React from "react";

import { ChartsHeader, LineChart } from "../../components";
=======
import React from 'react';

import { ChartsHeader, LineChart } from '../../components';
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
