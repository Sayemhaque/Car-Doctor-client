/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const TableRow = ({order}) => {
    const {customerName,serviceImg,serviceName,date,due} = order;
    return (
        <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
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