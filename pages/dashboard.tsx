import { PageContainer } from "@/components/PageContainer";
import { PageContent } from "@/components/PageContent";
import { CustomNextPage } from "@/interfaces/customNext";
import { DashboardLayout } from "@/layout";
import { auth } from "@/utils/firebase";

import { Stack } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";

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
