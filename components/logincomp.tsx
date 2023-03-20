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
} from "@mantine/core";

export function AuthenticationForm() {
  return (
    <Box pb={100}>
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
          <TextInput label="Email" placeholder="you@mantine.dev" required />
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
          <Button
            fullWidth
            mt="xl"
            variant="default"
            className="bg-blue-500 text-white hover:text-black"
          >
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
