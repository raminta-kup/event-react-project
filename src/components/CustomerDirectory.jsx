import axios from "axios";
import { useEffect, useState } from "react"
import { DirectoryTitle, Table, TableHead, TableRow, DeleteBtn, TableData } from "../styles/StyledCustomerDirectory";
import { DeleteBtnModal } from "./DeleteBtnModal";


export const CustomerDirectory = () => {
    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [customerDelete, setCustomerDelete] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/customers");
                if (response.status === 200) {
                    setCustomers(response.data);
                } else {
                    console.error("Failed to fetch customers");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchCustomers();
    }, []);

    const handleModalConfirmation = async () => {
        if (customerDelete) {
            try {
                const response = await axios.delete(
                    `http://localhost:5000/customers/${customerDelete}`
                );
                if (response.status === 200) {
                    setCustomers(customers.filter((customer) => customer.id !== customerDelete));
                    console.log("Customer deleted successfully");
                } else {
                    console.error("Failed to delete customer");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        setShowModal(false);
        setCustomerDelete(null);
    };

    const handleDelete = (customerId) => {
        setShowModal(true);
        setCustomerDelete(customerId);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setCustomerDelete(null);
    };

    return (
        <>
            <DirectoryTitle>Customer Directory</DirectoryTitle>
            <Table>
                <thead>
                    <tr>
                        <TableHead>Name</TableHead>
                        <TableHead>Surname</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone Number</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableData>{customer.firstName}</TableData>
                            <TableData>{customer.lastName}</TableData>
                            <TableData>{customer.email}</TableData>
                            <TableData>{customer.phoneNumber}</TableData>
                            <TableData>
                                <DeleteBtn onClick={() => handleDelete(customer.id)}>Delete</DeleteBtn>
                            </TableData>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            
            <DeleteBtnModal
                modalShow={showModal}
                close={handleModalClose}
                confirmation={handleModalConfirmation}
            />
        </>
    );
};