const unChekedOption = (elements: HTMLCollectionOf<HTMLInputElement>) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type == "radio") {
      elements[i].checked = false;
    }
  }
};

export default unChekedOption;
