import { Edit, Trash } from 'react-feather';
import './DashboardTable.css';


const DashboardTable = (props) => {
  return (
    <div className="dashboard-table">
      <div className="dashboard-table-header">
        {props.headers.map((header, i) => {
          return (
            <div className="dashboard-table__column" key={i}>{header}</div>
          );
        })}
        <div className="dashboard-table__column">Actions</div>
      </div>
      <div className="dashboard-table-body">
        {props.data.map((data, i) => {
          return (
            <div className="dashboard-table__row" key={i}>
              {Object.keys(data).map((key, j) => {
                return (
                  <div className='dashboard-table__column' key={j}>{data[key]}</div>
                );
              })}
              <div className='dashboard-table__column'>
                <button className="dashboard-table__button-icon" type="button"><Edit /></button>
                <button className="dashboard-table__button-icon" type="button"><Trash /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default DashboardTable;
