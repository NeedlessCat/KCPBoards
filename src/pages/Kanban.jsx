<<<<<<< HEAD
import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";
=======
import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
<<<<<<< HEAD
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
=======
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
