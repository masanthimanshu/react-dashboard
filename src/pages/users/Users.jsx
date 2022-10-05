import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Sidebar } from "../../components/Sidebar";

export const Users = () => {
  return (
    <>
      <Sidebar>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>S.No.</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>City</b>
              </TableCell>
              <TableCell>
                <b>Gender</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <UserTableData
              index={1}
              name="John Doe"
              place="Delhi"
              gender="Male"
            />
            <UserTableData
              index={2}
              name="John Doe"
              place="Delhi"
              gender="Male"
            />
          </TableBody>
        </Table>
      </Sidebar>
    </>
  );
};

const UserTableData = ({ index, name, place, gender }) => {
  return (
    <TableRow key={index}>
      <TableCell>{index}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{place}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>
        <IconButton onClick={() => alert("Edit Button Clicked")}>
          <Edit color="primary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
