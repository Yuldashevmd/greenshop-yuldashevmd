import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { ButtonLink, Container, Link } from "./style";

const DefinitionPart = () => {
  const { id } = useParams();

  return (
    <Container>
      <ButtonLink>
        <Link activestyle={"active"} to={`/home/${id}/text`}>
          Product Description
        </Link>
        <Link activestyle={"active"} to={`/home/${id}/review`}>
          Reviews (19)
        </Link>
      </ButtonLink>
      <Outlet />
    </Container>
  );
};

export default DefinitionPart;
