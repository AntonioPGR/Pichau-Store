export function getRandomItens<T>(ElementsArray: T[], numberOfElements: number): T[] {

  // caso o array total tenha menos elementos que o numero desejado, retorna o próprio array
  if (ElementsArray.length <= numberOfElements) {
    return ElementsArray;

  }
  // caso contrário, ele sorteia 'numberOfElements' numeros e os insere em um novo array

  // array de numero já escolhidos para não haver repetições
  const choisedNumbers: number[] = [];
  const randomItens: T[] = [];

  for (let i = 0; i < numberOfElements; i++) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // pega um numero aleatório entre o numero de elementos do array
      const randomNum = Math.floor(ElementsArray.length * Math.random());

      // verifica se esse numero já foi sorteado, caso não, insere o novo elemento e salva como choisedNumber o numero escolhido
      if (!choisedNumbers.includes(randomNum)) {
        randomItens.push(ElementsArray[randomNum]);
        choisedNumbers.push(randomNum);
        break;
      }
    }

  }

  return randomItens;
}