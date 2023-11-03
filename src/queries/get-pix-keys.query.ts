import { PixKey } from "@/models/pix-key";

export const getPixKeys = async (bankAccountId: string): Promise<PixKey[]> => {
  const response = await fetch(`http://localhost:3000/bank-accounts/${bankAccountId}/pix-keys`, {
		next: { tags: [`pix-keys-${bankAccountId}`] }
	});

  return response.json();
};