import type { Metadata } from "next";
import { Box } from "@mui/material";

import { ThemeRegistry } from "@/components/ThemeRegistry/ThemeRegistry";
import { NavBar } from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Code Pix",
  description: "A bank system application."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
				<NavBar/>

        <ThemeRegistry>
          <Box
            component="main"
            sx={{
              height: "100%",
              flexGrow: 1,
              mx: ["16px", "120px"],
              my: ["80px", "120px"]
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}