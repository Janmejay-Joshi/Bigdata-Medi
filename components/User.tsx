import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage({
  image,
  avatar,
  name,
  job,
  stats,
}: UserCardImageProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>

      <div className="m-4 text-center bold">Email : adampithewan@gmail.com</div>
      <div className="m-4 text-center bold">Age : XX</div>
      <div className="m-4 text-center bold">Gender : Male</div>
      <div className="m-4 text-center bold">Aadhar Number : XXXX-XXXX-XXXX</div>
      <div className="m-4 text-center bold">Unique Number : XXXX-XXXX-XXXX</div>
      <div className="flex justify-center">
        <Button
          fullWidth
          radius="md"
          mt="xl"
          size="md"
          color={theme.colorScheme === "dark" ? undefined : "dark"}
          className="bg-blue-500 text-white hover:text-black w-40"
          variant="default"
        >
          Edit Profile
        </Button>
      </div>
    </Card>
  );
}
