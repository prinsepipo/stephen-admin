import DashboardHeading from '../components/DashboardHeading';
import DashboardTable from '../components/DashboardTable';


const UserDashboard = () => {
  const userData = [
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      address: 'M.L. Quezon Street, Casuntingan, Mandaue City, Cebu, Philippines, 6014',
      dateCreated: '01/03/2023',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      address: 'M.L. Quezon Street, Casuntingan, Mandaue City, Cebu, Philippines, 6014',
      dateCreated: '01/03/2023',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      address: 'M.L. Quezon Street, Casuntingan, Mandaue City, Cebu, Philippines, 6014',
      dateCreated: '01/03/2023',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      address: 'M.L. Quezon Street, Casuntingan, Mandaue City, Cebu, Philippines, 6014',
      dateCreated: '01/03/2023',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      address: 'M.L. Quezon Street, Casuntingan, Mandaue City, Cebu, Philippines, 6014',
      dateCreated: '01/03/2023',
    },
  ];

  const tableHeaders =  [
    'Name',
    'Email Address',
    'Address',
    'Date Created',
  ];


  return (
    <div className="user-dashboard">
      <DashboardHeading title="User Management" />
      <DashboardTable
        data={userData}
        headers={tableHeaders}
      />
    </div>
  );
};


export default UserDashboard;
