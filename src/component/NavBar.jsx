import { Box, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box className="w-full bg-white px-4 md:px-10 py-4 flex items-center justify-between relative shadow-sm">

            {/* Logo Section */}
            <Box className="flex items-center gap-3">
                <Box className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <Typography className="text-white text-lg md:text-xl font-bold">
                        {"</>"}
                    </Typography>
                </Box>

                <Typography className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <a href="#home">WebShop Agency</a>
                </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box className="hidden md:flex items-center gap-12">

                <Box className="flex items-center gap-8 text-gray-600 font-medium">
                    <a href="#feature" className="hover:text-black transition">Features</a>
                    <a href="#pricing" className="hover:text-black transition">Pricing</a>
                    <a href="#techstack" className="hover:text-black transition">Tech Stack</a>
                    <a href="#howitworks" className="hover:text-black transition">How It Works</a>
                </Box>

                <Button
                    disableElevation
                    sx={{ textTransform: "none", color: "#ffffff" }}
                    className="px-6 py-2 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                >
                    <a href="#contact">Get Started</a>
                </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
                className="md:hidden"
                onClick={() => setOpen(!open)}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* Mobile Dropdown Menu */}
            {open && (
                <Box className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">

                    <a href="#feature" onClick={() => setOpen(false)}>Features</a>
                    <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
                    <a href="#techstack" onClick={() => setOpen(false)}>Tech Stack</a>
                    <a href="#howitworks" onClick={() => setOpen(false)}>How It Works</a>

                    <Button
                        disableElevation
                        sx={{ textTransform: "none", color: "#ffffff" }}
                        className="px-6 py-2 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                    >
                        <a href="#contact">Get Started</a>
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default NavBar;