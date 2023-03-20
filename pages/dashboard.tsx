import { Button, Stack, Table } from "@mantine/core";
import type { NextPage } from "next";
import { DashboardLayout } from "./layout";
import { PageContent } from "./component/PageContent";
import { PageContainer } from "./component/PageContainer";
import { showNotification } from "@mantine/notifications";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CustomNextPage } from "@/interfaces/customNext";

const Dashboard: CustomNextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <PageContainer title="Account" fluid>
      <Stack spacing="xl">
        <PageContent title="User Details">{user?.displayName}</PageContent>
        <PageContent title="Medical Reports">TODO</PageContent>
        <PageContent title="Lab Reports">TODO</PageContent>
      </Stack>
    </PageContainer>
  );
};

Dashboard.getLayout = DashboardLayout;

export default Dashboard;
