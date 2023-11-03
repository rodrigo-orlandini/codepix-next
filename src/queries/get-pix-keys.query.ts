import { PixKey } from "@/models/pix-key";

export const getPixKeys = async (bankAccountId: string): Promise<PixKey[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_API_URL}/bank-accounts/${bankAccountId}/pix-keys`, {
		next: { tags: [`pix-keys-${bankAccountId}`] }
	});

  return response.json();
};