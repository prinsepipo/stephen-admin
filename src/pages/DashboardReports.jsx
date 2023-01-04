import DashboardHeading from "../components/DashboardHeading";
import DashboardTable from "../components/DashboardTable";


const DashboardReports = () => {
  const reports = [
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
    {
      user: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet.',
      dateSubmitted: '01/03/2023',
    },
  ];

  const tableHeaders = [
    'Submitted By',
    'Description',
    'Date Submitted',
  ];

  return (
    <div className="dashboard-reports">
      <DashboardHeading title="Reports" />
      <DashboardTable
        data={reports}
        headers={tableHeaders}
      />
    </div>
  );
};


export default DashboardReports;
