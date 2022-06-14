import { Link } from "react-router-dom";

// @mui components
import { Button } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  return (
    <Container>
      {languageState.texts.Links.map((item) => {
        <Link key={item.to} to={item.to}>
          <Button>{item.label}</Button>
        </Link>;
      })}
    </Container>
  );
};

export default Navbar;
