import React, { useState } from "react";
import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  ListItem,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Todo2() {
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
      <Card
        sx={{ maxWidth: 345 }}
        style={{ margin: "auto", background: "" }}
        variant="outlined"
      >
        <CardHeader title="Todo List Items" subheader="September 22, 2022" />

        <Typography>
          <TextField
            style={{ margin: "5px" }}
            type="text"
            placeholder="Add a Item"
            onChange={itemEvent}
            value={inputList}
            //   variant="outlined"
            label="Input Item"
          />
          <Button variant="outlined">
            <AddIcon />
          </Button>
        </Typography>
        <CardContent>
          <ol>
            {Items.map((itemval) => {
              return (
                <>
                  <li>
                    {itemval}
                    <Checkbox />
                  </li>
                </>
              );
            })}
          </ol>
        </CardContent>
      </Card>
    </>
  );
}

export default Todo2;
