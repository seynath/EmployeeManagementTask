import { useState, useContext } from "react"
import { EmployeeContext } from "../context/EmployeeContext"

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
  })
  const [errors, setErrors] = useState({})

  const departments = [
    "Engineering",
    "Marketing",
    "Customer Support",
    "Human Resources",
    "Finance",

  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    } else if (formData.email.trim().length > 50) {
      newErrors.email = "Email must be less than 50 characters"
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required"
    } else if (formData.position.trim().length > 50) {
      newErrors.position = "Position must be less than 50 characters"
    }

    if (!formData.department) {
      newErrors.department = "Department is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      addEmployee({
        ...formData,
        id: Date.now().toString(),
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        position: "",
        department: "",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className={`shadow appearance-none border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
          id="name"
          type="text"
          placeholder="Seynath Thenura"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`shadow appearance-none border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
          id="email"
          type="email"
          placeholder="seynath@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
          Position
        </label>
        <input
          className={`shadow appearance-none border ${
            errors.position ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
          id="position"
          type="text"
          placeholder="Software Engineer"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        {errors.position && <p className="text-red-500 text-xs italic mt-1">{errors.position}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
          Department
        </label>
        <select
          className={`shadow appearance-none border ${
            errors.department ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white cursor-pointer`}
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept} className="cursor-pointer">
              {dept}
            </option>
          ))}
        </select>
        {errors.department && <p className="text-red-500 text-xs italic mt-1">{errors.department}</p>}
      </div>

      <div className="flex items-center justify-end">
        <button
          className="bg-black hover:bg-slate-300 hover:text-black  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Employee
        </button>
      </div>
    </form>
  )
}

export default EmployeeForm


// "use client"

// import { useState, useContext } from "react"
// import { EmployeeContext } from "../context/EmployeeContext"

// const EmployeeForm = () => {
//   const { addEmployee } = useContext(EmployeeContext)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     position: "",
//     department: "",
//   })
//   const [errors, setErrors] = useState({})

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.position.trim()) {
//       newErrors.position = "Position is required"
//     }

//     if (!formData.department.trim()) {
//       newErrors.department = "Department is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       addEmployee({
//         ...formData,
//         id: Date.now().toString(),
//       })

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         position: "",
//         department: "",
//       })
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//           Name
//         </label>
//         <input
//           className={`shadow appearance-none border ${
//             errors.name ? "border-red-500" : "border-gray-300"
//           } rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
//           id="name"
//           type="text"
//           placeholder="Seyanath Thenura"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className={`shadow appearance-none border ${
//             errors.email ? "border-red-500" : "border-gray-300"
//           } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
//           id="email"
//           type="email"
//           placeholder="tseynath@gmail.com"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
//           Position
//         </label>
//         <input
//           className={`shadow appearance-none border ${
//             errors.position ? "border-red-500" : "border-gray-300"
//           } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
//           id="position"
//           type="text"
//           placeholder="Software Engineer"
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//         />
//         {errors.position && <p className="text-red-500 text-xs italic mt-1">{errors.position}</p>}
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
//           Department
//         </label>
//         <input
//           className={`shadow appearance-none border ${
//             errors.department ? "border-red-500" : "border-gray-300"
//           } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 bg-white`}
//           id="department"
//           type="text"
//           placeholder="Engineering"
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//         />
//         {errors.department && <p className="text-red-500 text-xs italic mt-1">{errors.department}</p>}
//       </div>

//       <div className="flex items-center justify-end">
//         <button
//           className="bg-black hover:bg-slate-300 hover:text-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Add Employee
//         </button>
//       </div>
//     </form>
//   )
// }

// export default EmployeeForm
