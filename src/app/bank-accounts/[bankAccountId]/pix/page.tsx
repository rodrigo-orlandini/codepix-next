import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { PartPixKeyList } from "./PartPixKeyList";
import { PartPixKeyForm } from "./PartPixKeyForm";

interface BankAccountPixParams {
	bankAccountId: string;
}

const BankAccountPix = ({ params }: { params: BankAccountPixParams }) => {
	return (
		<Box>
			<Grid2 container spacing={8}>
				<Grid2 xs={12} sm={6}>
					<PartPixKeyForm bankAccountId={params.bankAccountId} />
				</Grid2>

				<Grid2 xs={12} sm={6}>
					<div>
						<PartPixKeyList bankAccountId={params.bankAccountId} />
					</div>
				</Grid2>
			</Grid2>
		</Box>
	);
};

export default BankAccountPix;