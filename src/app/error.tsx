"use client";

import { useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    //console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Erro 501 - Ocorreu um erro interno no servidor. Tente novamente mais tarde."
    />
  );
}
