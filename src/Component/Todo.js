import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  Paper,
  Card,
  CardHeader,
  AppBar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";



function Todo() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList != "") {
      setItems((olditems) => {
        return [...olditems, inputList];
      });
    }
    setInputList("");
  };

  return (
    <>
      <AppBar style={{ margin: "auto", padding: "10px" }}>
        <h1>TODO LIST</h1>
      </AppBar>
      <Card
        style={{
          width: "40%",
          margin: "125px",
          padding: "auto",
          background: "lightblue",
        }}
      >
        <div className="main-div">
          <div className="center_div">
            <br />
            <h1>Enter the Items</h1>
            <br />
            <TextField
              type="text"
              placeholder="Add a Item"
              onChange={itemEvent}
              value={inputList}
              //   variant="outlined"
              label="Input Item"
            />
            <Button
              variant="contained"
              component="label"
              color="primary"
              onClick={listOfItems}
            >
              +
            </Button>

            <List component="nav" aria-label="mailbox folders">
              {/* <Item>bo</Item> */}
              <ol>
                {Items.map((itemval) => {
                  return (
                    <>
                      <ListItem button>
                        <li>
                          {itemval}
                          <Checkbox />
                        </li>
                      </ListItem>
                    </>
                  );
                })}
              </ol>
            </List>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Todo;
