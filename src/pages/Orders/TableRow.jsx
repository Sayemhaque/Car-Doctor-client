/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const TableRow = ({ order }) => {
  const { customerName, serviceImg, serviceName, date, due } = order;
  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-16 h-16">
              <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
      </td>

      <td>
        {customerName}
      </td>
      <td>
        {date}
      </td>
      <td>
        ${due}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TableRow;