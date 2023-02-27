import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban/src';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class App extends React.Component {
  public kanbanRemoteDatasource : DataManager = new DataManager(
    {
      url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
      adaptor: new ODataAdaptor,
      crossDomain: true
    }
  );
  public cardTooltipTemplate (data: any): JSX.Element {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td><b>Assignee :</b></td>
              <td>{data.Assignee}</td>
            </tr>
            <tr>
              <td><b>Type :</b></td>
              <td>{data.Type}</td>
            </tr>
            <tr>
              <td><b>Estimate :</b></td>
              <td>{data.Estimate}</td>
            </tr>
            <tr>
              <td><b>Summary :</b></td>
              <td>{data.Summary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
      return(<KanbanComponent dataSource={this.kanbanRemoteDatasource} keyField="Status"

      cardSettings={{contentField:"Summary", headerField:"Id", selectionType:"Multiple"}}  swimlaneSettings={{keyField:"Assignee"}}
      enableTooltip={true} tooltipTemplate={this.cardTooltipTemplate}>

        <ColumnsDirective>
          <ColumnDirective headerText='To Do' keyField="Open"></ColumnDirective>
          <ColumnDirective headerText='In Progress' keyField="In Progress"></ColumnDirective>
          <ColumnDirective headerText='Review' keyField="Review"></ColumnDirective>
          <ColumnDirective headerText='Testing' keyField="Testing" ></ColumnDirective>
          <ColumnDirective headerText='Close' keyField="Close" ></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent>);
  }
}

export default App;