import Button from "@material-ui/core/Button";
import React from "react";

export default function UserActions({ tab }) {
  function handleActions(tabName) {
    switch (tabName) {
      case "accepted": {
        return (
          <>
            <Button size="small" color="primary" style={{ margin: "0 auto" }}>
              <img
                src="/images/cancel.svg"
                alt="Ícone do botão cancelar"
                loading="lazy"
                style={{ marginRight: 4 }}
              />
              <span style={{ color: "#E84545" }}>Cancelar</span>
            </Button>
            <Button size="small" color="primary" style={{ margin: "0 auto" }}>
              <img
                src="/images/confirm.svg"
                alt="Ícone do botão confirmar"
                loading="lazy"
                style={{ marginRight: 4 }}
              />
              <span style={{ color: "#0633C0" }}>Confirmar</span>
            </Button>
          </>
        );
      }
      case "confirmation": {
        return (
          <>
            <Button size="small" color="primary" style={{ margin: "0 auto" }}>
              <img
                src="/images/cancel.svg"
                alt="Ícone do botão cancelar"
                loading="lazy"
                style={{ marginRight: 4 }}
              />
              <span style={{ color: "#E84545" }}>Cancelar</span>
            </Button>
            <Button size="small" color="primary" style={{ margin: "0 auto" }}>
              <img
                src="/images/confirm.svg"
                alt="Ícone do botão confirmar"
                loading="lazy"
                style={{ marginRight: 4 }}
              />
              <span style={{ color: "#0633C0" }}>Confirmar</span>
            </Button>
          </>
        );
      }
      case "getKeys": {
        return;
      }
      case "inProgress": {
        return;
      }
    }
  }
  return <div style={{ margin: "0 auto" }}>{handleActions(tab)}</div>;
}
