import { Box, Typography } from "@mui/material";
import Link from "next/link";

const styles = {
    Container: {
        mb: "4em",
        h4: {
            fontWeight: 600,
            color: "#ff650d"
        }
    }
}

const Header = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h4" component="h4">
                React Simple Phone Input
            </Typography>
            <Typography variant="body1" component="p" sx={{
                fontSize: "16px", a: {
                    textDecoration: "none", color: "#ff650d"
                }
            }}>
                Created by <Link href="https://www.siamahnaf.com/">Siam Ahnaf</Link>
            </Typography>
        </Box>
    );
};
export default Header;