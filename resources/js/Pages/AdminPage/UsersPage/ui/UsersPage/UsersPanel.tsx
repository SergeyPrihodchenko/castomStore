import { Box, Button, Checkbox, FormControlLabel, Grid, Table, TableCell, TableContainer, TableHead, TextField } from "@mui/material";
import { IUser } from "../../model/types/type";
import { SearchRounded, TableRows } from "@mui/icons-material";
import { style } from "../../model/styles/style";
import { useState } from "react";
import { useGetAdminsMutation } from "../../model/redux/RTKQuery";

const UsersPanel = ({users, isSuper}: {users: IUser, isSuper: boolean}) => {
    
    const [userList, setUserList] = useState(users);

    const [checkAdmin, setCheckAdmin] = useState(false);

    const [adminsList, {}] = useGetAdminsMutation();
    
    const getAdmins = async(e: any) => {
        setCheckAdmin(checkAdmin ? false : true);
        
        if(e.target.checked) {
            const {data}: any = await adminsList('');
            
            setUserList(data);
        } else {

            setUserList(users);

        }
    }

    return (        
        <>
            <Grid container sx={style.container}>
                <Grid item xs={12}>
                <Box sx={style.serchBox}>
                    <SearchRounded sx={style.serchBox.icon} />
                    <TextField id="input-with-sx" label="serch by email" variant="standard"/>
                    {isSuper ? <FormControlLabel sx={style.serchBox.checkBox} control={<Checkbox checked={checkAdmin} onChange={getAdmins}/>} label="Only admins" /> : ''}
                </Box>
                    <Box sx={style.tableBox}>
                        <TableContainer>
                        <Table>
                            <TableHead>
                                <TableCell sx={style.headRow}>name</TableCell>
                                <TableCell sx={style.headRow}>email</TableCell>
                                <TableCell sx={style.headRow}>action</TableCell>
                            </TableHead>
                            {userList.map((user:IUser) => {return <tr key={user.id}>
                                <TableCell sx={style.rowData}>{user.name}</TableCell>
                                <TableCell sx={style.rowData}>{user.email}</TableCell>
                                <TableCell sx={style.rowButton}>
                                <Button variant="contained">Show</Button>
                                <Button variant="contained" sx={style.buttonDelete}>Delete</Button>
                                </TableCell>
                            </tr>})}
                        </Table>
                        </TableContainer>
                    </Box>
                </Grid> 
            </Grid>
        </>
    );
}

export default UsersPanel;