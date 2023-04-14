export function maskOnlyNumbers(numbers: string = '') {
  numbers = numbers.replace(/[^0-9]/g, '');
  return numbers;
}

export function maskCPF(cpf: string = '', hide?: boolean) {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  if (hide) {
    let documentSplited = cpf.split('.');
    return (
      '***.' +
      documentSplited[1] +
      '.' +
      documentSplited[2].split('-')[0] +
      '-**'
    );
  }

  return cpf;
}
