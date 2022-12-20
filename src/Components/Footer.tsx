import { Box, Stack, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";


const styles = {
    Container: {
        textAlign: "center",
        mt: "30px"
    },
    Create: {
        fontSize: "16px"
    },
    Name: {
        fontWeight: 600,
        color: "#ff650d"
    },
    Social: {
        justifyContent: "center",
        mt: "5px",
        a: {
            mx: "5px",
            fontSize: "20px",
            color: "black",
            "&:hover": {
                color: "#ff650d"
            }
        }
    },
    Divider: {
        bgcolor: "#ff650d",
        borderWidth: "4px",
        my: "10px"
    }
}

const Footer = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="body1" component="p" sx={styles.Create}>
                Created by
            </Typography>
            <Typography variant="h4" component="h4" sx={styles.Name}>
                Siam Ahnaf
            </Typography>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://www.siamahnaf.com/">
                    <Icon icon="mdi:web" />
                </Link>
                <Link href="https://github.com/siamahnaf198">
                    <Icon icon="ant-design:github-outlined" />
                </Link>
                <Link href="https://twitter.com/siamahnaf198">
                    <Icon icon="mdi:twitter" />
                </Link>
                <Link href="https://www.npmjs.com/~siamahnaf">
                    <Icon icon="carbon:logo-npm" />
                </Link>
            </Stack>
            <Divider sx={styles.Divider} />
        </Box>
    );
};
export default Footer;