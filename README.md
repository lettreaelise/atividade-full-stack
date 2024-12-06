# Geolocation App (React Native)

Este é um aplicativo móvel desenvolvido com **React Native** que utiliza o **Expo** para acessar a geolocalização do dispositivo. O app exibe informações de localizações obtidas de uma API, além de mostrar a localização atual do usuário em tempo real.

## Propósito do App

O principal objetivo deste projeto é fornecer uma aplicação simples que consome dados de localizações de uma API e, ao mesmo tempo, utiliza o recurso de geolocalização do dispositivo para mostrar a posição atual do usuário. O app foi desenvolvido como parte de um exercício acadêmico, com o intuito de aprender sobre integração de APIs, uso de geolocalização e boas práticas no desenvolvimento de aplicações móveis com React Native.

## Funcionalidades

- **Exibição das localizações de uma API**: O app consome uma API local para exibir localizações.
- **Geolocalização em tempo real**: O app obtém e exibe a latitude e longitude atual do dispositivo.
- **Interface simples e agradável**: A interface foi estilizada com cartões e ícones para tornar a experiência do usuário mais agradável.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento e execução de apps React Native.
- **Geolocalização**: Utilização da API de geolocalização do Expo para obter a localização atual do dispositivo.
- **Fetch API**: Para consumir dados de uma API externa.

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- **Node.js**: Para gerenciar pacotes e dependências.
- **Expo CLI**: Ferramenta para executar e gerenciar o app no ambiente de desenvolvimento.
  - Instale o Expo CLI globalmente com o seguinte comando:
    ```bash
    npm install -g expo-cli
    ```

## Como Rodar o Projeto

### 1. Clone o repositório

Primeiro, faça o clone deste repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/react-native-geolocation-app.git
cd react-native-geolocation-app
```

### 2. Instale as dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
npm install
```

### 3. Instale o Expo Location

Para usar a geolocalização, instale a dependência expo-location:
```bash
expo install expo-location
```

### 4. Execute o aplicativo

Para rodar o aplicativo no ambiente de desenvolvimento, utilize o comando:
```bash
npx expo start
```
