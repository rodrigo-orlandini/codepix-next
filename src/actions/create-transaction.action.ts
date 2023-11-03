"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createTransactionAction = async (bankAccountId: string, formData: FormData) => {
  const pixKeyKind = formData.get("pix_key_kind");
  const pixKeyKey = formData.get("pix_key_key");
  const amount = formData.get("amount");
  const description = formData.get("description");

  const response = await fetch(`http://localhost:3000/bank-accounts/${bankAccountId}/transactions`, {
		method: "POST",
		body: JSON.stringify({
			pix_key_kind: pixKeyKind,
			pix_key_key: pixKeyKey,
			amount: parseFloat(amount as string),
			description: description
		}),
		headers: { "Content-Type": "application/json" }
	});

  if (!response.ok) {
    throw new Error(JSON.stringify(await response.json()));
  }

  await response.json();
  revalidateTag(`bank-accounts-${bankAccountId}`);
  redirect(`/bank-accounts/${bankAccountId}/dashboard`);
};