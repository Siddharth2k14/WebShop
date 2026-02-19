import { Box, Button, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <Box className="w-full bg-white px-10 py-4 flex items-center justify-between">

            {/* Logo Section */}
            <Box className="flex items-center gap-3">
                <Box className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <Typography className="text-white text-xl font-bold">
                        {"</>"}
                    </Typography>
                </Box>

                <Typography className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <a href="#home" className="cursor-pointer hover:text-black transition">
                        WebShop Agency
                    </a>
                </Typography>
            </Box>

            {/* Right Section (Links + Button Together) */}
            <Box className="flex items-center gap-12">

                {/* Navigation Links */}
                <Box className="flex items-center gap-8 text-gray-600 font-medium">
                    <Typography className="cursor-pointer hover:text-black transition">
                        <a
                            href="#feature"
                            className="cursor-pointer hover:text-black transition"
                        >
                            Features
                        </a>
                    </Typography>
                    <Typography className="cursor-pointer hover:text-black transition">
                        <a
                            href="#pricing"
                            className="cursor-pointer hover:text-black transition"
                        >
                            Pricing
                        </a>
                    </Typography>
                    <Typography className="cursor-pointer hover:text-black transition">
                        <a
                            href="#techstack"
                            className="cursor-pointer hover:text-black transition"
                        >
                            Tech Stack
                        </a>
                    </Typography>
                    <Typography className="cursor-pointer hover:text-black transition">
                        <a
                            href="#howitworks"
                            className="cursor-pointer hover:text-black transition"
                        >
                            How It Works
                        </a>
                    </Typography>
                </Box>

                {/* Get Started Button */}
                <Button
                    disableElevation
                    sx={{
                        textTransform: "none",
                        color: "#ffffff",
                    }}
                    className="px-6 py-2 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                >
                    <a href="#contact">
                        Get Started
                    </a>
                </Button>
            </Box>
        </Box>
    );
};

export default NavBar;