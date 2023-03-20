import { BadgeCard } from "@/components/Card";
import { PageContainer } from "@/components/PageContainer";
import { PageContent } from "@/components/PageContent";
import { UserCardImage } from "@/components/User";
import { CustomNextPage } from "@/interfaces/customNext";
import { DashboardLayout } from "@/layout";
import { auth } from "@/utils/firebase";

import { Button, Stack } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard: CustomNextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <PageContainer title="Account" fluid>
      <Stack spacing="xl">
        <PageContent title="User Details">{user?.displayName}</PageContent>
        <UserCardImage image={"https://avatars.githubusercontent.com/u/92779466?v=4"} avatar={"https://avatars.githubusercontent.com/u/92779466?v=4"} name={"Adam Pithenwala"} job={"Doctor"} stats={[]} />
        
      </Stack>
    </PageContainer>
  );
};

Dashboard.getLayout = DashboardLayout;

export default Dashboard;
