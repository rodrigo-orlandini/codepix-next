"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addBankAccountToCookie = (bankAccountId: string) => {
	cookies().set("bankAccountId", bankAccountId);
	
  redirect(`/bank-accounts/${bankAccountId}/dashboard`);
};