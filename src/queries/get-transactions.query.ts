import { Transaction } from "@/models/transaction";

export const getTransactions = async (bankAccountId: string): Promise<Transaction[]> => {
	const response = await fetch(`http://localhost:3000/bank-accounts/${bankAccountId}/transactions`, {
		next: { revalidate: 10 }	
	});

	return response.json();
};