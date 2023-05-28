import { useState, useEffect } from "react";
import axios from "axios";

export const Profile = ({ currentUser }) => {
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/profile/${currentUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEmployee(response.data.employee);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser) {
      // console.log(currentUser)
      fetchEmployeeData();
    }
  }, [currentUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Welcome, {employee.firstName} {employee.lastName}!</h1>
    </>
  );
};
