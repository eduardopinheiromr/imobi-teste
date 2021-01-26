export function handleTitleAndSubtitle(tabName, setTitle, setSubtitle) {
  switch (tabName) {
    case "accepted": {
      setTitle("Todas as visitas aceitas ");
      setSubtitle(
        "Confira todas as visitas que foram aceitas por você e pelos corretores:"
      );
      return;
    }
    case "confirmation": {
      setTitle("Aguardando confirmação ");
      setSubtitle(
        "Confirme com o proprietário se a visita poderá acontecer no dia e horário indicado."
      );
      return;
    }
    case "getKeys": {
      setTitle("Buscando a chave ");
      setSubtitle(
        "A visita foi confirmada e o(a) corretor(a) está indo até a imobiliária buscar a chave do imóvel para realizar a visita."
      );
      return;
    }
    case "inProgress": {
      setTitle("Visitas em andamento ");
      setSubtitle("Confira todas visitas que estão em andamento no momento:");
      return;
    }
  }
}
