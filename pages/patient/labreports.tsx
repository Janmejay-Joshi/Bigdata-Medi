import { BadgeCard } from "@/components/Card";
import { PageContainer } from "@/components/PageContainer";
import { PageContent } from "@/components/PageContent";
import { CustomNextPage } from "@/interfaces/customNext";
import { DashboardLayout } from "@/layout";
import { auth } from "@/utils/firebase";

import { Button, Stack } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";

const LabReports: CustomNextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <PageContainer title="Lab Reports" fluid>
      <Stack spacing="xl">
        <PageContent title="Lab Reports">
          <div className="flex w-full gap-2">
            <BadgeCard
              image={"https://avatars.githubusercontent.com/u/92779466?v=4"}
              title={"Adam"}
              country={"India"}
              description={"Hello my name is adam"}
              badges={[{ emoji: "hehe", label: "patient" }]}
            />
            <BadgeCard
              image={"https://avatars.githubusercontent.com/u/92779466?v=4"}
              title={"Adam"}
              country={"India"}
              description={"Hello my name is adam"}
              badges={[{ emoji: "hehe", label: "patient" }]}
            />
            <BadgeCard
              image={"https://avatars.githubusercontent.com/u/92779466?v=4"}
              title={"Adam"}
              country={"India"}
              description={"Hello my name is adam"}
              badges={[{ emoji: "hehe", label: "patient" }]}
            />
          </div>
          <div className="p-8 flex justify-center ">
            <Button
              variant="default"
              className="bg-blue-500 text-white hover:text-black"
            >
              Show more
            </Button>
          </div>
        </PageContent>
      </Stack>
    </PageContainer>
  );
};

LabReports.getLayout = DashboardLayout;

export default LabReports;
