const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {columns.map((col) => (
              <th key={col} className="text-left py-3">{col}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b">
              {Object.values(row).map((value, i) => (
                <td key={i} className="py-3">{value}</td>
              ))}

              <td className="space-x-2">
                <button
                  onClick={() => onEdit(row)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(row)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
