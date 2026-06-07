import { Box, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box className="w-full sticky top-0 left-0 z-50 px-4 md:px-10 py-4 flex items-center justify-between glass-panel border-slate-200/80 shadow-xl">

            {/* Logo Section */}
            <Box className="flex items-center gap-3">
                <img
                    src="https://res.cloudinary.com/dhgojtmbf/image/upload/v1772568298/logo_lnrgcs.avif"
                    alt="WebShop Agency Logo"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />

                <Typography className="text-xl md:text-2xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <NavLink to="/home">Web Shop Agency</NavLink>
                </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box className="hidden md:flex items-center gap-12">

                <Box className="flex items-center gap-8 text-slate-100 font-medium">
                    <NavLink to="/feature" className="hover:text-cyan-300 transition">Features</NavLink>
                    <NavLink to="/pricing" className="hover:text-cyan-300 transition">Pricing</NavLink>
                    <NavLink to="/techstack" className="hover:text-cyan-300 transition">Tech Stack</NavLink>
                    <NavLink to="/howitworks" className="hover:text-cyan-300 transition">How It Works</NavLink>
                </Box>

                <Button
                    component={NavLink}
                    to="/contact"
                    disableElevation
                    sx={{ textTransform: "none", color: "#ffffff" }}
                    className="px-6 py-2 rounded-2xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90"
                >
                    Get Started
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
                <Box className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-6 py-6 md:hidden z-50 border-t border-slate-800">

                    <NavLink to="/feature" onClick={() => setOpen(false)} className="text-slate-100 hover:text-cyan-300 transition">Features</NavLink>
                    <NavLink to="/pricing" onClick={() => setOpen(false)} className="text-slate-100 hover:text-cyan-300 transition">Pricing</NavLink>
                    <NavLink to="/techstack" onClick={() => setOpen(false)} className="text-slate-100 hover:text-cyan-300 transition">Tech Stack</NavLink>
                    <NavLink to="/howitworks" onClick={() => setOpen(false)} className="text-slate-100 hover:text-cyan-300 transition">How It Works</NavLink>

                    <Button
                        disableElevation
                        sx={{ textTransform: "none", color: "#ffffff" }}
                        className="px-6 py-2 rounded-2xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90"
                    >
                        <NavLink to="/contact" className="text-white">Get Started</NavLink>
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default NavBar;
