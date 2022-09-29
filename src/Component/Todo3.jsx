import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";

function RenderItems({ Item }) {
  if (Item.length != 0) {
    return (
      <>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography>
                {Item.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {item}
                        <Button variant="contained" color="secondary">
                          Delete
                        </Button>
                      </div>
                      <br />
                    </>
                  );
                })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default function Todo3() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    if (inputList != "") {
      setItems((olditems) => {
        return [...olditems, inputList];
      });
    }
    setInputList("");
  };

  return (
    <div className="todo-container">
      <Card
        sx={{
          maxWidth: 550,
          minHeight: "600px",
          marginLeft: "60px",
          marginTop: "50px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TODO LIST
            </Typography>
            <Typography>
              <TextField
                sx={{ marginBottom: "15px" }}
                value={inputList}
                onChange={itemEvent}
                id="standard-basic"
                label="Input Items"
                variant="standard"
              />
              <Button
                variant="contained"
                onClick={ListOfItems}
                sx={{ marginLeft: "10px", marginTop: "10px" }}
              >
                Submit
              </Button>
            </Typography>
            <Typography>
              <RenderItems Item={Items} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
