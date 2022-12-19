import { Box } from "@mui/material";
import type { NextPage } from "next";

//Component
import { PhoneInput } from "react-simple-phone-input";


const Home: NextPage = () => {
  return (
    <Box sx={{ my: "3em", width: "400px", mx: "auto" }}>
      <PhoneInput
        country="US"
        placeholder="Add your phone"
        onChange={(data) => console.log(data)}
      />
    </Box>
  );
};

export default Home;