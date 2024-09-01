import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
const [data, setData] = useState([]);
const navigate =useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function del_value(id) {
    axios.delete('http://localhost:3001/delete/'+ id).then((res)=>{
      alert('Data removed');
      window.location.reload()
    }).catch((error)=>{
      console.log(error)
    })
  }
  function update_Value(val) {
    navigate('/Add',{state:{val}})
  }
  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="image"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
              <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => del_value(val._id)} 
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => update_Value(val)} 
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
