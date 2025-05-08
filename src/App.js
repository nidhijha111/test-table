import "./App.css";
import { Table } from "react-custome-table";
function App() {

  const columns = [
    { title: "ID", dataIndex: "id", sorter: true, showSearch: true },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: true,
      showSearch: true,
      customRenderer: (value) => `$${value.toFixed(2)}`,
      showFilter:true,
    },
    { title: "Status", dataIndex: "status", sorter: true, showSearch: true },
    { title: "Email", dataIndex: "email", sorter: false, showSearch: true },
  ];

  const data = [
    {
      id: "pay_001",
      amount: 120.5,
      status: "pending",
      email: "alice@example.com",
    },
    {
      id: "pay_002",
      amount: 75.0,
      status: "processing",
      email: "bob@example.com",
    },
    {
      id: "pay_003",
      amount: 250.0,
      status: "success",
      email: "carol@example.com",
    },
    {
      id: "pay_004",
      amount: 40.99,
      status: "failed",
      email: "dave@example.com",
    },
    {
      id: "pay_005",
      amount: 99.95,
      status: "success",
      email: "eve@example.com",
    },
    {
      id: "pay_006",
      amount: 300.0,
      status: "processing",
      email: "frank@example.com",
    },
    {
      id: "pay_007",
      amount: 120.5,
      status: "pending",
      email: "alice@example.com",
    },
    {
      id: "pay_008",
      amount: 75.0,
      status: "processing",
      email: "bob@example.com",
    },
    {
      id: "pay_009",
      amount: 250.0,
      status: "success",
      email: "carol@example.com",
    },
    {
      id: "pay_010",
      amount: 40.99,
      status: "failed",
      email: "dave@example.com",
    },
    {
      id: "pay_011",
      amount: 99.95,
      status: "success",
      email: "eve@example.com",
    },
    {
      id: "pay_012",
      amount: 300.0,
      status: "processing",
      email: "frank@example.com",
    },
    {
      id: "pay_013",
      amount: 120.5,
      status: "pending",
      email: "alice@example.com",
    },
    {
      id: "pay_014",
      amount: 75.0,
      status: "processing",
      email: "bob@example.com",
    },
    {
      id: "pay_015",
      amount: 250.0,
      status: "success",
      email: "carol@example.com",
    },
    {
      id: "pay_016",
      amount: 40.99,
      status: "failed",
      email: "dave@example.com",
    },
    {
      id: "pay_017",
      amount: 99.95,
      status: "success",
      email: "eve@example.com",
    },
    {
      id: "pay_018",
      amount: 300.0,
      status: "processing",
      email: "frank@example.com",
    },
    {
      id: "pay_019",
      amount: 120.5,
      status: "pending",
      email: "alice@example.com",
    },
    {
      id: "pay_020",
      amount: 75.0,
      status: "processing",
      email: "bob@example.com",
    },
    {
      id: "pay_021",
      amount: 250.0,
      status: "success",
      email: "carol@example.com",
    },
    {
      id: "pay_022",
      amount: 40.99,
      status: "failed",
      email: "dave@example.com",
    },
    {
      id: "pay_023",
      amount: 99.95,
      status: "success",
      email: "eve@example.com",
    },
    {
      id: "pay_024",
      amount: 300.0,
      status: "processing",
      email: "frank@example.com",
    },
  ];

  return (
    <div className="App">
        <Table
          columns={columns}
          data={data}
          sortable
          theme={{
            textColor: "#000",
            buttonBg: "#000",
            borderColor: "#ccc",
            headerBg: "#dadce0",
            rowHoverColor: "#dadce0",
          }}
        />
    </div>
  );
}

export default App;
