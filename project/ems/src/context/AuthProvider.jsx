import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//     const [userData, setUserData] = useState(null)
// useEffect(() => {
//     setLocalStorage()
//     const {employees,admin} = getLocalStorage()
//     setUserData({employees,admin})

// }, [])
    
//   return (
//     <div>
//         <AuthContext.Provider value={userData}>
//             {children}

//         </AuthContext.Provider>
     
//     </div>
//   )
// }

// export default AuthProvider


// import { createContext, useEffect, useState } from "react"

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//   const [authData, setAuthData] = useState(null)

//   useEffect(() => {
//     const employees = JSON.parse(localStorage.getItem("employees"))

//      if (data) {
//       setAuthData({ employees: JSON.parse(data) })
//     } else {
//       console.log("⚠️ No employees in localStorage")
//       setAuthData({ employees: [] }) // ✅ fallback
//     }
//   }, [])

//   return (
//     <AuthContext.Provider value={authData}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
// import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // ✅ Load from localStorage initially
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const [admin, setAdmin] = useState(() => {
    return JSON.parse(localStorage.getItem("admin")) || [];
  });

  // ✅ Sync with localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(admin));
  }, [admin]);

  // ✅ Add Task (Admin use)
  const addTask = (empName, taskObj) => {
    const updated = employees.map((emp) => {
      if (emp.firstName === empName) {
        return {
          ...emp,
          tasks: [...emp.tasks, taskObj],
        };
      }
      return emp;
    });

    setEmployees(updated);
  };

  // ✅ Update Task Status (Employee use)
  const updateTask = (empId, taskId, newStatus) => {
    const updated = employees.map((emp) => {
      if (emp.id === empId) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === taskId
              ? { ...task, status: newStatus }
              : task
          ),
        };
      }
      return emp;
    });

    setEmployees(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        employees,
        admin,
        setEmployees,
        addTask,
        updateTask,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;