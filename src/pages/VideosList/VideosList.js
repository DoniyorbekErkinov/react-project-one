import React, { useState, useEffect, useCallback } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { lightBlue, blueGrey } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import apiService from "../../Services/ApiService";
import { useNavigate } from "react-router-dom";
const b = lightBlue[50];
const g = blueGrey[100];
const useStyle = makeStyles({
  mainRoot: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    margin: "0 auto",
    flexDirection: 'column',

  },
  root: {
    boxSizing: "border-box",
    // width: "60%",
    // height: "50vh",
    backgroundColor: b,
    margin: "0 auto",
    borderRadius: 15,
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
  },
  tableRoot: {
    borderRadius: 15,
  },
  button: {
    width: 200,
    right: 0
  },
  bBox: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "end",
    alignItems: "end",
  }
});

function ItemList() {
  function createData(name, email, website, actions) {
    return { name, email, website, actions };
  }
  const classes = useStyle();
  const [videos, setUserList] = useState([]);
  const updateUser = useCallback(
    (e) => {
      console.log(e);
    },
    [videos]
  );
  const deleteUser = useCallback(
    (e) => {
      apiService.delete(e.id).then(res => {
        console.log(res)
        getList()
      })
    },
    [videos]
  );
  const viewVideo = useCallback(
    (e) => {
      // apiService.delete(e.id).then(res => {
      //   console.log(res)
      //   getList()
      // })
    },
    [videos]
  );

  function getList() {
    apiService.getList().then((res) => {
      setUserList(res.data);
    });
  }
  let navigate = useNavigate();
  const goToAddPage = () =>{
    let path = `/add-videos`;
    navigate(path);
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className={classes.mainRoot}>
      <Box className={classes.root}>
        <Box className={classes.bBox} >
          <Stack  align="right" spacing={2}>
          <Button onClick={goToAddPage} size="large" sx={{margin: 1}}  variant="outlined" color="success">
            Add Videos
          </Button>
        </Stack>
          </Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ width: 880 }}
            size="small"
            className={classes.tableRoot}
            aria-label="Items">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {videos.map((video) => (
                <TableRow
                  key={video.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="video">
                    {video.name}
                  </TableCell>
                  <TableCell align="center">
                    <a target="_blank" href={video.link}>
                      Link
                    </a>
                  </TableCell>
                  <TableCell align="right">
                    <Stack
                      sx={{ marginLeft: 5 }}
                      direction="row"
                      align="right"
                      spacing={2}>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() => updateUser(video)}>
                        <EditSharpIcon />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="error"
                        onClick={() => deleteUser(video)}>
                        <DeleteOutlineSharpIcon />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="info"
                        onClick={() => viewVideo(video)}>
                        <RemoveRedEyeSharpIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
    </div>
  );
}

export default ItemList;
