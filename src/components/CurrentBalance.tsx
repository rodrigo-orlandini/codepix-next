import { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";

import { getBankAccount } from "@/queries/get-bank-account.query";

interface CurrentBalanceProps {
	bankAccountId: string;
}

export const CurrentBalance = async (props: PropsWithChildren<CurrentBalanceProps>) => {
	const bankAccount = await getBankAccount(props.bankAccountId);

	return (
		<Box display="flex" flexDirection="row">
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
					p: 2,
        	borderRadius: "7px 0px 0px 7px"
				}}
			>
        <Typography variant="h6" component="div">Saldo atual</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "primary.dark",
          color: "primary.contrastText",
					p: 2,
					borderRadius: "0px 7px 7px 0px"
        }}
			>
        <Typography variant="h5" component="div">R$ {bankAccount.balance}</Typography>
      </Box>
    </Box>
	);
};