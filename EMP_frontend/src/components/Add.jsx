import { Box, Button, TextField } from "@mui/material";
import  { useState,useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };
  const addData = () => {
    if (location.state?.val?._id) {
      
      axios.put(`http://localhost:3001/edit/${location.state.val._id}`, inputs)
        .then(() => {
          alert('Data updated successfully');
          navigate('/'); 
        })
        .catch((error) => {
          console.error("Error updating data", error);
        });
    } else {
      
      axios.post("http://localhost:3001/add", inputs)
        .then(() => {
          alert('Data added');
          navigate('/'); 
        })
        .catch((error) => {
          console.error("Error adding data", error);
        });
    }
  };

  useEffect(() => {
    if (location.state?.val) {
      setInputs({
        EmpName: location.state.val.EmpName || "",
        designation: location.state.val.designation || "",
        empId: location.state.val.empId || "",
        img_url: location.state.val.img_url || ""
      });
    } else {
      setInputs({
        EmpName: "",
        designation: "",
        empId: "",
        img_url: ""
      });
    }
  }, [location.state]);
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
        <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: "center",fontWeight: 'bold',
            color: 'purple' }}>
          ADD NEW EMPLOYEE
        </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={4}
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
