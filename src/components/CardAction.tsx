import { PropsWithChildren } from "react";
import { Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Card } from "./Card";

export interface CardActionProps {}

export const CardAction = (props: PropsWithChildren<CardActionProps>) => {
	return (
		<Card>
			<Grid2 container spacing={2}>
				<Grid2 xs={12} sm={9}>{props.children}</Grid2>

				<Grid2 
					xs={12}
					sm={3}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>
					<Button color="primary">
						<ArrowForwardIos />
					</Button>
				</Grid2>
			</Grid2>
		</Card>
	);
};