import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

import AutoDelete from "@mui/icons-material/AutoDelete";

// function RenderCard({ arr }) {
//   if (arr.length != 0) {
//     return (
//       <>
//         <Card>
//           <CardActionArea>
//             <CardContent>
//               <Typography>
//                 {arr.map((item) => {
//                   return (
//                     <>
//                       <div style={{ display: "flex" }}>
//                         <div
//                           style={{
//                             minWidth: "60%",
//                             maxWidth: "60%",
//                             padding: "10px",
//                             wordBreak: "break-word",
//                           }}
//                         >
//                           {item[1]}
//                         </div>
//                         <div
//                           style={{
//                             width: "30%",
//                             marginLeft: "10px",
//                           }}
//                         >
//                           <Button
//                             // onClick={handleDelete}
//                             variant="contained"
//                             color="secondary"
//                           >
//                             <AutoDelete sx={{ marginRight: "5px" }} />
//                             Delete
//                           </Button>
//                         </div>
//                         <br />
//                       </div>
//                     </>
//                   );
//                 })}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </>
//     );
//   }
// }

export default function Todo4() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    if (inputList != "") {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputList,
      };
      setItems([...Items, allInputData]);
      setInputList("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = Items.filter((element) => {
      return element.id !== index;
    });
    setItems(updatedList);
  };

  return (
    <>
      <div className="background">
        <div className="todo-container">
          <div className="topbar">
            <Typography
              sx={{ color: "white" }}
              variant="h3"
              component="h1"
              className="header"
            >
              TODO LIST
            </Typography>
            <div className="input">
              <TextField
                value={inputList}
                onChange={itemEvent}
                sx={{ margin: "10px", backgroundColor: "white" }}
                id="filled-basic"
                label="Input Item"
                variant="filled"
                color="primary"
              />
              <Button
                sx={{ margin: "12px" }}
                variant="contained"
                onClick={ListOfItems}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="items">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography>
                    {Items.map((item) => {
                      return (
                        <>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                minWidth: "60%",
                                maxWidth: "60%",
                                padding: "10px",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.name}
                            </div>
                            <div
                              style={{
                                width: "30%",
                                marginLeft: "10px",
                              }}
                            >
                              <Button
                                key={item.id}
                                onClick={() => handleDelete(item.id)}
                                variant="contained"
                                color="secondary"
                              >
                                <AutoDelete sx={{ marginRight: "5px" }} />
                                Delete
                              </Button>
                            </div>
                            <br />
                          </div>
                        </>
                      );
                    })}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
