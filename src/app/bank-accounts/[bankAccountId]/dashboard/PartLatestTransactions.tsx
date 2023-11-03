"use client";

import { useRouter } from "next/navigation";
import { green, red } from "@mui/material/colors";
import { DataGrid, GridColDef } from "@/components/mui";

import { Transaction } from "@/models/transaction";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 300 },
  {
    field: "created_at",
    headerName: "Data",
    width: 200,
    renderCell: (params) => new Date(params.value as string).toLocaleString()
  },
  { field: "description", headerName: "Descrição", width: 130 },
  {
    field: "amount",
    headerName: "Valor (R$)",
    width: 180,
    renderCell: (params) => {
      const amount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(params.value as number);
      
			return <span style={{ color: params.value < 0 ? red[500] : green[500] }}>{amount}</span>;
    }
  }
];

interface PartLatestTransactionsProps {
  transactions: Transaction[];
	bankAccountId: string;
  page?: number;
	take?: number;
};

export const PartLatestTransactions = ({ transactions, bankAccountId, page, take }: PartLatestTransactionsProps) => {
	const router = useRouter();

  return <DataGrid 
		rows={transactions} columns={columns} 
		initialState={{
			pagination: {
				paginationModel: { page, pageSize: take }
			}
		}}
		pageSizeOptions={[10, 20]}
		onPaginationModelChange={({ page, pageSize }) => {
			const paginatedRoute = `/bank-accounts/${bankAccountId}/dashboard?page=${page}&take=${pageSize}`;

			router.push(paginatedRoute);
		}}
	/>;
};