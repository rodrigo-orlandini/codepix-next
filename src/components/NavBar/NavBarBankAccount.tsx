import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Box, Button, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { getBankAccount } from "@/queries/get-bank-account.query";

interface NavBarBankAccountProps {
  bankAccountId: string;
}

export const NavBarBankAccount = async (props: NavBarBankAccountProps) => {
  const bankAccount = await getBankAccount(props.bankAccountId);
  
	const onSubmit = async () => {
		"use server";
          
		cookies().delete("bankAccountId");
    redirect("/");
	};

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

      <form action={onSubmit} style={{ all: "unset" }}>
        <Button color="inherit" type="submit">Sair</Button>
      </form>
    </Box>
  );
};