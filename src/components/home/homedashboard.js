import React, { Component } from 'react';
//import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class HomeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "Client", field: "Client", sortable:true, filter:true},
        {headerName: "Skill", field: "Labels", sortable:true, filter:true}, 
        {headerName: "Open#", field: "Open", sortable:true, filter:true }, 
        {headerName: "Filled#", field: "Filled", sortable:true, filter:true}, 
        {headerName: "Received#", field: "Recieved", sortable:true, filter:true}, 
        {headerName: "Waiting#", field: "Waiting", sortable:true, filter:true },
        {headerName: "Submitted#", field: "Submitted", sortable:true, filter:true}, 
        {headerName: "Rejected#", field: "Rejected", sortable:true, filter:true}
    ],
      rowData: [
        {Client : "Lowes", Labels: "Architect", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},      
          {Client : "Lowes", Labels: "QA",Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},      
          {Client : "Lowes", Labels: "Web Developer", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},      
          {Client : "Food Lion", Labels: "Product Manager", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},      
          {Client : "Food Lion", Labels: "Scrum Master", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},     
          {Client : "Food Lion", Labels: "Full Stack Developer", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4},
          {Client : "Food Lion", Labels: "Program Manager", Open: 3, Filled: 4, Recieved: 3, Waiting: 2, Submitted: 2, Rejected:4}
    ]
    }
  }

  render() {
    return (
      <div
          id="myGrid"
          style={{
            margin:'25px',
            height: '400px',
            width: '1200px',
          }}
          className="ag-theme-alpine"
        >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default HomeDashboard;