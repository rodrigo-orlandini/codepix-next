import { Box, Button, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { getBankAccount } from "@/queries/get-bank-account.query";
import { deleteBankAccountFromCookie } from "@/actions/delete-bank-account-from-cookie.action";

interface NavBarBankAccountProps {
  bankAccountId: string;
}

export const NavBarBankAccount = async (props: NavBarBankAccountProps) => {
  const bankAccount = await getBankAccount(props.bankAccountId);
  
	return (
    <Box>
      <Chip
				sx={{ backgroundColor: "primary.contrastText", py: 3 }}
        label={
          <Box display="flex" alignItems="center" gap={1}>
            <PersonIcon />
            <Box display="flex" flexDirection="column">
              <span>{bankAccount.owner_name}</span>
              <span>C/C {bankAccount.account_number}</span>
            </Box>
          </Box>
        }
      />

      <form action={deleteBankAccountFromCookie} style={{ all: "unset" }}>
        <Button color="inherit" type="submit">Sair</Button>
      </form>
    </Box>
  );
};