<p align="center">
   <img width="400px" src="https://uploads-ssl.webflow.com/626700b57159ef0b0e37452e/626700b57159ef56063746ce_orbitall-logo-dark.svg" alt="Logo" />
</p>

## O que é um Monorepo?
Um monorepo é um repositório de código que contém vários projetos ou componentes que são gerenciados em conjunto. Em outras palavras, em vez de dividir o código em vários repositórios menores, todo o código é armazenado em um único repositório.

O uso de um monorepo oferece várias vantagens, como a facilidade de compartilhar código entre projetos, garantir a consistência entre as versões de diferentes projetos, reduzir a sobrecarga de gerenciamento de vários repositórios, entre outros.

## 📄 Detalhes do repositório
Neste repositório, você encontrará vários diretórios, cada um contendo um projeto específico, com suas próprias dependências e configurações. Alguns desses projetos podem ser executados e testados de forma independente, enquanto outros dependem de outros pacotes.

Para ajudar a gerenciar esse ecossistema, usamos ferramentas como o Yarn Workspaces e o Lerna para lidar com as dependências compartilhadas. Dessa forma, podemos garantir que todos os pacotes estejam sempre atualizados e funcionando corretamente juntos.

## 📦 Packages e suas responsabilidades

#### BFF
O pacote BFF é responsável por fornecer uma camada intermediária entre o frontend e o backend do aplicativo, chamada de BFF (Backend For Frontend). Essa camada permite que o frontend do aplicativo se comunique com o backend de maneira mais eficiente e fácil.

O BFF é construído usando o framework NestJS, que é um framework Node.js que ajuda a construir aplicativos escaláveis, eficientes e fáceis de manter. Com NestJS, é possível definir rotas, controladores, serviços e outras configurações para o BFF.

A principal responsabilidade do BFF é fazer a comunicação direta com o módulo services. Essa comunicação é essencial para o funcionamento do aplicativo, pois é através do BFF que o frontend pode fazer solicitações para o backend e receber as respostas.

#### Services
A pasta services é responsável por fazer as requisições para a API e processar as respostas. Isso significa que essa pasta contém classes que encapsulam a lógica de comunicação com o backend do aplicativo.

Os services são usados para abstrair a lógica de comunicação com a API, tornando o código reutilizável e fácil de manter.

O pacote services é responsável inteiramente por fazer as requisições para a API. Ele recebe as solicitações do BFF e se comunica diretamente com a API, processando as respostas e retornando os dados para o BFF. Isso inclui a configuração das rotas, a definição dos endpoints da API e a implementação dos métodos HTTP, como GET, POST, PUT, DELETE e outros.

#### Guards
O pacote guards será responsável por mostrar ao pacote APP quais fluxos determinados clientes têm acesso. Por exemplo, se um cliente não tiver permissão para acessar o fluxo de cartão de crédito, o guard não adicionará a lista, todos esses módulos são configurados e dado permissão por meio do remote config.

Em resumo, a pasta guards é responsável por definir as regras de acesso para o aplicativo, permitindo que apenas cliente autorizados tenham acesso a determinados módulos.

#### App
Um dos principais objetivos do pacote app é fornecer a experiência do usuário do aplicativo. Isso significa que você encontrará todos os arquivos que lidam com a renderização e manipulação de componentes da interface do usuário.

Além disso, essa pasta pode conter chamadas para a montagem do cliente, que é responsável por criar a conexão com o remote config e enviar ou receber dados.

Em resumo, a pasta app é a principal responsável pela interação entre o usuário e o aplicativo, garantindo que a experiência do usuário seja a melhor possível.

#### Modules
O pacote modules é responsável por conter a lógica e as telas dos módulos do aplicativo, que incluem Conta de Pagamento, Cartão de Crédito e Common.

A estrutura da pasta é separada da seguinte forma:

Cartões de Crédito: Este módulo contém os arquivos necessários para implementar as funcionalidades do cartão de crédito. As funcionalidades para esse módulo são: Minhas Faturas, Cartão Virtual, Ajuste de Limite, Aviso de Viagem, Cartão Adicional, Segunda Via, Bloqueio / Desbloqueio Temporário, Bloqueio Permanente, Troca de Senha do Cartão, Exibição de Senha do Cartão, Alteração de Vencimento, Parcelamento de Saldo e Controle de Utilização.

Conta de Pagamento: Este módulo contém os arquivos necessários para implementar as funcionalidades da conta de pagamento.  As funcionalidades para esse módulo são: Gerar Boleto, Transferência P2P, Transferência EFT, Pagamento de Boleto, Recarga de Celular, Cartão Virtual, Informe de Rendimento, Transferir, Receber PIX, Ler QR Code e Chaves.

Common: Este módulo contém arquivos comuns que são usados em todos os módulos do aplicativo.  As funcionalidades para esse módulo são: FAQ, Taxas, Alterar Senha do App, Alterar Endereço, Login, Esqueceu Senha e Onboarding.

Dessa forma, cada subpasta contém a lógica e as telas específicas para cada módulo, permitindo que cada módulo seja implementado de forma independente. Isso facilita a manutenção do código, pois as alterações feitas em um módulo específico não afetam diretamente outros módulos e a alteração feita num módulo é alterado para todos os aplicativos.

#### Store
O pacote Store é responsável por gerenciar o estado da aplicação e fazer as requisições para a API, utilizando a biblioteca Redux Toolkit. Ele é dividido em subpastas correspondentes a cada módulo da aplicação, e é responsável por toda a geração e armazenamento de informações necessárias para o funcionamento dos módulos.

A utilização do Redux Toolkit facilita o gerenciamento do estado da aplicação, fornecendo um conjunto de ferramentas e funções que reduzem a quantidade de código necessário para definir as ações, reducers e selectors.

Os arquivos do pacote Store são definidos utilizando a sintaxe do Redux Toolkit, o que torna o processo de definição das ações e reducers mais simples e intuitivo. Além disso, o Redux Toolkit também fornece funcionalidades adicionais, como a capacidade de lidar com as ações assíncronas de forma mais eficiente, através do uso do middleware createAsyncThunk.

Desta forma, o pacote Store utilizando Redux Toolkit é capaz de gerar informações dos módulos e garantir que elas sejam atualizadas de forma consistente em toda a aplicação, de forma mais simples e eficiente.

#### Utils
O pacote Utils é responsável por armazenar funções e variáveis que serão reutilizadas em toda a aplicação. Ele é uma coleção de ferramentas e utilitários que podem ser utilizados para facilitar a implementação de novas funcionalidades e reduzir a quantidade de código duplicado.

As funções e variáveis contidas no pacote Utils são definidas de forma genérica e abstrata, de modo que possam ser utilizadas em diferentes contextos e módulos da aplicação. Por exemplo, podem ser incluídas funções para formatação de datas, cálculos matemáticos, validação de dados, dentre outras.

Ao separar essas funcionalidades em um pacote Utils, é possível manter um código mais organizado e modular, evitando duplicação de código e tornando mais fácil a manutenção e atualização da aplicação.

Além disso, o pacote Utils pode conter também variáveis e constantes que serão utilizadas em diferentes partes da aplicação, como configurações, mensagens de erro e outras informações comuns.

Desta forma, o pacote Utils é um componente importante da arquitetura da aplicação, permitindo o reuso de código e mantendo um código mais organizado e fácil de ser mantido.

## 🛠 Tecnologias

- [Yarn Workspace][yarn]
- [Lerna][lerna]
- [Expo Dev][expo]
- [Nest][nest]
- [Redux toolkit][redux]
- [axios][axios]

## 🚀 Rodar projeto

```bash
# Clone the monorepo
$ git clone https://github.com/gmorae/monorepo-core

# Access the folder
$ cd monorepo-core

# Install the dependencies
$ yarn

# Start the app
$ yarn app:android || yarn app:ios

# Start the module common
$ yarn module-common:android || yarn module-common:ios

# Start the BFF
$ yarn bff:dev
```


[yarn]: https://classic.yarnpkg.com/lang/en/docs/workspaces/
[lerna]: https://lerna.js.org/
[expo]: https://expo.dev/
[nest]: https://nestjs.com/
[redux]: https://redux-toolkit.js.org/
[axios]: https://axios-http.com/ptbr/docs/intro