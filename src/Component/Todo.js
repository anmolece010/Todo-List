import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}

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
      <div className="main-div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
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
            {Items.map((itemval) => {
              return (
                <>
                  <ListItem button>
                    <ListItemText primary={itemval} />
                    <Checkbox />
                    {/* </ListItemText> */}
                    {/* <hr /> */}
                  </ListItem>
                </>
              );
            })}
            {/* </Item> */}
          </List>
        </div>
      </div>
    </>
  );
}

export default Todo;
