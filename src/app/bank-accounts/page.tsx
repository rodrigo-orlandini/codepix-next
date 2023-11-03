import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { CardAction } from "@/components/CardAction";

import { getBankAccounts } from "../../queries/get-bank-accounts.query";

const BankAccounts = async () => {
	const bankAccounts = await getBankAccounts();

	return (
		<div>
			<Typography variant="h4">Contas Bancárias</Typography>

			<Grid2 container spacing={2} mt={1}>
				{bankAccounts.map(bankAccount => (
					<Grid2 key={bankAccount.id} xs={12} sm={6} md={4}>
						<CardAction>
							<Typography variant="h5" component="div">{bankAccount.owner_name}</Typography>

							<Typography component="span">Conta: {bankAccount.account_number}</Typography>
						</CardAction>
					</Grid2>
				))}
			</Grid2>
		</div>
	);
};

export default BankAccounts;