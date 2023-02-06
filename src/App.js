import "./styles.css";
import { Box, Stack, TextField, Button } from "@mui/material";
import { Categories } from "./Categories";
import { fetchFromAPI } from "./fetchFromAPI";
import { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetchFromAPI("search?part=snippet&q=new");
  }, []);

  // const [selectedCategory, setSeletedCategory] = useState("New");
  const selectedCategory = "New";

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: 4 }}
      >
        <Box>
          <h1> Video Clone </h1>
        </Box>
        <Box>
          <TextField fullWidth label="Search..." id="fullWidth" />
        </Box>
      </Stack>

      <Stack direction="column" display="flex">
        <Box>
          {Categories.map((category) => (
            <Button
              // onClick={() => console.log(category.name)}
              key={category.name}
              sx={{
                backgroundColor:
                  category.name === selectedCategory ? "#000" : "#3e3e3e",
                color: "white",
                ":hover": { color: "#000" }
              }}
            >
              <span> {category.icon} </span>
              <span> {category.name} </span>
            </Button>
          ))}
        </Box>

        <Box>
          <h1> this is a heading </h1>
          {console.log(fetchFromAPI)}
        </Box>
      </Stack>
    </div>
  );
}
