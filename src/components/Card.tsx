import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const Card = (props: PropsWithChildren) => {
	return (
		<Box sx={{
			borderLeft: "4px solid",
			borderColor: "primary.main",
			p: 2,
			boxShadow: 1,
			backgroundColor: "primary.contrastText"
		}}>
			{props.children}
		</Box>
	);
};