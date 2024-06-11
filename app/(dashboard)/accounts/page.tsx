"use client";
import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";


const AccountsPage = () => {

    const newAccount = useNewAccount();
    const accountsQuery = useGetAccounts();
    const accounts = accountsQuery.data || [];

    return ( 
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                    Accounts page
                    </CardTitle>
                    <Button onClick={newAccount.onOpen} size='sm'>
                        <Plus className="size-4 mr-2"/>
                       Add New 
                    </Button>
                </CardHeader>
                <CardContent>
                <DataTable columns={columns} data={accounts} filterKey="email" onDelete={() => {}}/> 
                </CardContent>
            </Card>
        </div>
     );
}
 
export default AccountsPage;