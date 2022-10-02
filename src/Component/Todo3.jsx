import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

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
                          <AutoDeleteIcon
                            // onClick={deleteItem(item)}
                            sx={{ marginRight: "5px" }}
                          />
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

const arr = [{ id: 0, name: "xyz" }];

export default function Todo3() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState(arr);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    if (inputList != "") {
      setItems((olditems) => {
        return [...olditems, [arr.id + 1, inputList]];
      });
    }
    setInputList("");
  };

  return (
    <div className="todo-container">
      <div
        style={{
          maxWidth: 550,
          minHeight: "600px",
          // marginLeft: "60px",
          // marginTop: "50px",
          backgroundColor: "rgb(235,203,144)",
          border: "2px solid white",
        }}
      >
        <div>
          <div>
            <div
              style={{
                backgroundColor: "rgb(198,107,39)",
                padding: 0,
                margin: 0,
                marginBottom: "10px",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  color: "White",
                }}
              >
                TODO LIST
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <input
                  style={{ marginBottom: "15px" }}
                  value={inputList}
                  onChange={itemEvent}
                  label="Input Items"
                />
                <Button
                  variant="contained"
                  onClick={ListOfItems}
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div>
              <RenderItems Item={Items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
