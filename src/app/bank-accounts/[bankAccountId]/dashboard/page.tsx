import Link from "next/link";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { CurrentBalance } from "@/components/CurrentBalance";
import { CardAction } from "@/components/CardAction";
import { PartLatestTransactions } from "./PartLatestTransactions";
import { getTransactions } from "@/queries/get-transactions.query";

interface BankAccountDashboardParams {
	bankAccountId: string;
}

interface BankAccountDashboardSearchParams {
	page: string;
	take: string;
}

const BankAccountDashboard = async ({ 
	params, searchParams 
}: { 
	params: BankAccountDashboardParams,
	searchParams: BankAccountDashboardSearchParams
}) => {
	const page = parseInt(searchParams.page) || 1;
	const take = parseInt(searchParams.take) || 10;

	const transactions = await getTransactions(params.bankAccountId);

	return (
		<Grid2 container spacing={2}>
			<Grid2 xs={12} lg={6}>
				<div>
					<CurrentBalance bankAccountId={params.bankAccountId} />
				</div>
			</Grid2>

			<Grid2 container xs={12} lg={6} spacing={1}>
				<Grid2 xs={6}>
          <Link
            href={`/bank-accounts/${params.bankAccountId}/withdraw`}
            style={{ textDecoration: "none" }}
          >
            <CardAction sx={{ display: "flex", alignItems: "center" }}>
              <Typography component="span" color="primary">Transferência</Typography>
            </CardAction>
          </Link>
        </Grid2>

        <Grid2 xs={6}>
          <Link
            href={`/bank-accounts/${params.bankAccountId}/pix`}
            style={{ textDecoration: "none" }}
          >
            <CardAction sx={{ display: "flex", alignItems: "center" }}>
              <Typography component="span" color="primary">Nova chave pix</Typography>
            </CardAction>
          </Link>
        </Grid2>
			</Grid2>

			<Grid2 xs={12}>
				<Typography variant="h5">Últimos lançamentos</Typography>

				<PartLatestTransactions transactions={transactions} bankAccountId={params.bankAccountId} />
			</Grid2>
		</Grid2>
	);
};

export default BankAccountDashboard;