import { useContext } from "react"
import { EmployeeContext } from "../context/EmployeeContext"

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext)

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {employees.length === 0 ? (
        <p className="text-center py-4 text-gray-500">No employees found. Add one!</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {employees.map((employee) => (
            <li key={employee.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="flex text-sm">
                      <p className="font-medium text-slate-900 truncate">{employee.name}</p>  
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500"> | {employee.position}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <p>
                          Department: {employee.department} • {employee.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default EmployeeList
