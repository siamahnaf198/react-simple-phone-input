import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const styles = {
    Container: {
        mb: "4em"
    },
    Name: {
        fontWeight: 600,
        color: "#ff650d"
    },
    Version: {
        fontSize: "12px",
        ml: "15px"
    }
}

const Header = () => {
    return (
        <Box sx={styles.Container}>
            <Stack direction="row">
                <Typography variant="h4" component="h4" sx={styles.Name}>
                    React Simple Phone Input
                </Typography>
                <Box sx={styles.Version}>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {"v5.0.5"}
                    </SyntaxHighlighter>
                </Box>
            </Stack>
            <Typography variant="body1" component="p" sx={{
                fontSize: "16px", mb: "12px"
            }}>
                A simple react phone input component with calling code dropdown🤷
            </Typography>
            <Typography variant="body1" component="p" sx={{
                fontSize: "14px", a: {
                    textDecoration: "none", color: "#ff650d"
                }
            }}>
                Created by <Link href="https://www.siamahnaf.com/">Siam Ahnaf</Link>
            </Typography>
        </Box>
    );
};
export default Header;