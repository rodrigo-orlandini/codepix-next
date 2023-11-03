import { BankAccount } from "@/models/bank-account";

export const getBankAccounts = async (): Promise<BankAccount[]> => {
	const response = await fetch("http://localhost:3000/bank-accounts", {
		next: { revalidate: 10 }	
	});

	return response.json();
};