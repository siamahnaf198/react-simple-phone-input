import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";

// //i
import PhoneInput from "Components/PhoneInput";


const Home: NextPage = () => {
  return (
    <Box sx={{ my: "3em" }}>
      <PhoneInput
        country="US"
        placeholder="Add your phone"
        onChange={(data) => console.log(data)}
      />
    </Box>
  );
};

export default Home;