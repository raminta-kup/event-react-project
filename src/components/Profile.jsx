import axios from "axios";
import { useEffect, useState } from "react"

export const Profile = ({currentUser}) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        if (currentUser) {
          axios
            .get(`http://localhost:5000/profile/${currentUser.id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((response) => {
              setEmployee(response.data.employee);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, [currentUser]);
  
    if (!employee) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        <h1>Welcome, {employee.firstName} {employee.lastName}!</h1>
      </>
    );
}