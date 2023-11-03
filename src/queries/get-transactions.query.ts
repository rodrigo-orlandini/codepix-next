import { Transaction } from "@/models/transaction";

export const getTransactions = async (bankAccountId: string): Promise<Transaction[]> => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_API_URL}/bank-accounts/${bankAccountId}/transactions`, {
		next: { revalidate: 10 }	
	});

	return response.json();
};