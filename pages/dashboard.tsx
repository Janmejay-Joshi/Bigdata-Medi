import { Button, Stack, Table } from "@mantine/core";
import type { CustomNextPage } from "next";
import { DashboardLayout } from "./layout";
import { PageContent } from "./component/PageContent";
import { PageContainer } from "./component/PageContainer";
import { showNotification } from "@mantine/notifications";

const Dashboard: CustomNextPage = () => {
  return (
    <PageContainer title="Account" fluid>
      <Stack spacing="xl">
        <PageContent title="User Details">
          Adam Pithenwala
        </PageContent>
        <PageContent title="User Reports">
        </PageContent>
      </Stack>
    </PageContainer>
  );
};


Dashboard.getLayout = DashboardLayout;

export default Dashboard;
