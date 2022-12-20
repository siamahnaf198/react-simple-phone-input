import { Container, Box, Grid, Typography, NoSsr } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
//
import GithubCorner from "react-github-corner";

//
import { PhoneInput } from "react-simple-phone-input";
import "react-simple-phone-input/dist/style.css";

//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

//
import Footer from "Components/Footer";
import Header from "Components/Header";

const BasicExample =
  `
<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
/>

`
const DialCodeInput =
  `
<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
/>
`
const IconComponent =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  iconComponent={<Icon icon="bx:chevron-down" />}
/>`
const onlyCountry =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  onlyCountries={["BD", "AF", "US"]}
/>`
const excludeCountry =
  ` <PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  excludeCountries={["BD", "AF", "AL"]}
/>`
const PreferredCountry =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  preferredCountries={["BD", "AF", "AL"]}
/>`
const SearchShow =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  search={false}
/>`
const SearchIcon =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  searchIconComponent={<Icon icon="ic:baseline-search" />}
/>`
const SearchByCountry =
  `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  searchPlaceholder="Search by country"
/>`

const Home: NextPage = () => {
  return (
    <Container disableGutters sx={{ py: "20px" }}>
      <Header />
      <Head>
        <title>React Simple Phone Input</title>
      </Head>
      <GithubCorner href="https://github.com/siamahnaf198/react-simple-phone-input" bannerColor="#ff650d" />
      <Grid container spacing={5}>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Basic Example
            </Typography>
            <PhoneInput
              country="AI"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {BasicExample}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Country Code in Input Field
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {DialCodeInput}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Custom Dropdown Icon
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              iconComponent={<Icon icon="bx:chevron-down" />}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {IconComponent}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Only Include some country
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              onlyCountries={["BD", "AF", "US"]}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {onlyCountry}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Exclude Some Country from the list
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              excludeCountries={["BD", "AF", "AL"]}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {excludeCountry}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Preferred country to show on top
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              preferredCountries={["BD", "AF", "AL"]}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {PreferredCountry}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Show or Hide Search
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              search={false}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {SearchShow}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Change your search icon
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              searchIconComponent={<Icon icon="ic:baseline-search" />}
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {SearchIcon}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item {...{ md: 4 }}>
          <Box>
            <Typography variant="body1" component="p" sx={{ mb: "10px" }}>
              Custom search input placeholder
            </Typography>
            <PhoneInput
              country="US"
              placeholder="Add your phone"
              onChange={(data) => console.log(data)}
              dialCodeInputField
              searchPlaceholder="Search by country"
            />
            <SyntaxHighlighter language="javascript" style={dracula}>
              {SearchByCountry}
            </SyntaxHighlighter>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Container >
  );
};

export default Home;