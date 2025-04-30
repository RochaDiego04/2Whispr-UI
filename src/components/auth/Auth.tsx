import { Button, Stack, TextField } from "@mui/material";

type AuthProps = {
  submitLabel: string;
  onSubmit: (email: string, password: string) => Promise<void>;
  children: React.ReactNode;
};

export default function Auth({ submitLabel, onSubmit, children }: AuthProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        height: "100vh",
        maxWidth: { xs: "70%", md: "50%", lg: "30%" },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField type="email" label="Email" variant="outlined" />
      <TextField type="password" label="Password" variant="outlined" />
      <Button variant="contained" onClick={() => onSubmit("email", "password")}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
}
