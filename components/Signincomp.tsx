import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  Select,
  createStyles,
  rem,
} from "@mantine/core";
import { useForm, isEmail, isNotEmpty } from "@mantine/form";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function Signincomp() {
  const { classes } = useStyles();
  const form = useForm({
    validate: {
      email: isEmail("Invalid email"),
      name: isNotEmpty("Name cannot be empty"),
    },
  });

  useEffect(() => {
    console.log(form.values, form.isValid());
  });

  return (
    <Box>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Name"
            placeholder="Andrew tatte"
            required
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            mt="md"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Age"
            placeholder="XX"
            mt="md"
            required
            {...form.getInputProps("age")}
          />
          <Select
            mt="md"
            withinPortal
            data={["Doctor", "Patient", "Chemist", "Pathologist"]}
            placeholder="Pick one"
            label="Your user type"
            classNames={classes}
            {...form.getInputProps("type")}
          />
          <Select
            mt="md"
            withinPortal
            data={["Male", "Female"]}
            placeholder="Pick one"
            label="Your gender"
            classNames={classes}
            {...form.getInputProps("gender")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" variant="default" className="bg-blue-500 text-white hover:text-black">
            Login
          </Button>
          <div className="flex justify-between mt-8 bold">
            Else Continue with Google
          </div>
          <Button
            fullWidth
            mt="xl"
            variant="default"
            className="bg-blue-500 text-white hover:text-black"
          >
            Login With Google
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
