import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'; // Import moment for date formatting
import Header from '../../Components/Header/Header';
import { deleteLog } from '../../Components/Redux/Logs/LogsSlice';
import { useNavigate } from "react-router-dom";

function Logs() {
  const logs = useSelector((state) => state.logs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteLog(index));
  };

  const handleView = (index) => {
    navigate(`/cartlogs/${index}`);
  };
  

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Logs</h2>
        <table>
          <thead>
            <tr>
              <th>View</th>
              <th>Timestamp</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => handleView(index)}>View</button>
                </td>
                <td>{moment(log.timestamp).format('MMM D, YYYY h:mm A')}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
