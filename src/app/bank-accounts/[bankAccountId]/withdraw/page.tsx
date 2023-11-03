import { Box } from "@mui/material";

import { PartWithdrawForm } from "./PartWithdrawForm";

interface BankAccountWithdrawParams {
	bankAccountId: string;
}

const BankAccountWithdraw = async ({ params }: { params: BankAccountWithdrawParams }) => {
  return (
    <Box>
      <PartWithdrawForm bankAccountId={params.bankAccountId} />
    </Box>
  );
};

export default BankAccountWithdraw;