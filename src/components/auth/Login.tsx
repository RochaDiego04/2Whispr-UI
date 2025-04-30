import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

export default function Login() {
  return (
    <Auth
      submitLabel="Login"
      onSubmit={async () => {}}
      children={
        <Link to={"/signup"} style={{ alignSelf: "center" }}>
          <MUILink>Signup</MUILink>
        </Link>
      }
    />
  );
}
