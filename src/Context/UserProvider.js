import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {id: 1, name: "Hujaifa", position: 'Web Developer', salary: 10000 },
    {id: 2, name: "Talha", position: 'Brand Promotor', salary: 20000 },
    {id: 3, name: "Shorif", position: 'Computer Operator', salary: 6000 },
  ]);
  return (
    <div>
      <userContext.Provider value={[users, setUsers]}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
