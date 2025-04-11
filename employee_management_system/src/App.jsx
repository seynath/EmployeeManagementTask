import EmployeeList from "./components/EmployeeList"
import EmployeeForm from "./components/EmployeeForm"
import { EmployeeProvider } from "./context/EmployeeContext"

function App() {
  return (
    <EmployeeProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg md:text-3xl font-bold text-gray-900">Employee Management</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
                  <EmployeeForm />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4 ">Employee List</h2>
                  <EmployeeList />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </EmployeeProvider>
  )
}

export default App
