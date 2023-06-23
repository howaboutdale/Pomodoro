import React from "react";
import { Container, Box } from "@mui/material";

const DefaultLayout = ({ children }) => {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: 'inherit',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh", // adjust as needed
                }}
            >
                {children}
            </Box>
        </Container>
    );
};

export default DefaultLayout;