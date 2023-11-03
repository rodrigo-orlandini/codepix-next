import { BankAccount } from "@/models/bank-account";

export const getBankAccount = async (bankAccountId: string): Promise<BankAccount> => {
	const response = await fetch(`http://localhost:3000/bank-accounts/${bankAccountId}`, {
		next: { revalidate: 20 }	
	});

	return response.json();
};