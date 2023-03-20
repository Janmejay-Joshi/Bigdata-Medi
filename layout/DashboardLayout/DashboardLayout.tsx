import { FC, ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  AppShell,
  Box,
  CloseButton,
  Drawer,
  MediaQuery,
} from "@mantine/core";
import { Menu2 } from "tabler-icons-react";

import { LayoutErrorBoundary } from "../LayoutErrorBoundary";
import { CustomNextPage } from "@/interfaces/customNext";

const SideNav = dynamic(async () => {
  const { SideNav } = await import("./SideNav");
  return SideNav;
});

export const DashboardLayout = (page: ReactNode) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: "100vh" },
        main: { padding: 0, backgroundColor: theme.colors.gray[0] },
      })}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <SideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      {/* <Header
        left={
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <ActionIcon
              variant="hover"
              radius="xl"
              size={40}
              onClick={handlers.open}
            >
              <Menu2 />
            </ActionIcon>
          </MediaQuery>
        }
      /> */}
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  );
};

const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({
  opened,
  handleClose,
}) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", handleClose);
    return () => {
      router.events.off("routeChangeStart", handleClose);
    };
  }, [handleClose, router.events]);

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      style={{ position: "relative" }}
    >
      <CloseButton
        size="xl"
        radius="xl"
        variant="transparent"
        onClick={handleClose}
        sx={{
          position: "absolute",
          zIndex: 999,
          top: 8,
          right: -56,
          color: "white",
          "&:not(:disabled):active": { transform: "none" },
        }}
      />
      <SideNav />
    </Drawer>
  );
};
