# Projeto NLW5 Rocketseat - 2021
> Sobre o projeto

# SUMÁRIO
- [Dia 01](#Dia-01)
- [Dia 02](#Dia-02)
- [Dia 03](#Dia-03)

- [Referências](#Referências)

# LISTA DE DEPENDÊNCIAS:

## Expo Vector:

Para trabalhar com icons.

> expo install @expo/vector-icons

[Referências](##Mais-informações-sobre-Expo:)

## Font - Jost (Google Fonts via Expo)

> expo install expo-font @expo-google-fonts/jost

[Referência/docs](https://docs.expo.io/guides/using-custom-fonts/)
  
### Expo App Loading
  > expo install expo-app-loading 

  [Documentação](https://docs.expo.io/versions/latest/sdk/app-loading/)

## React Navigation
> yarn add @react-navigation/native

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

> yarn add @react-navigation/stack

[Referências](##Mais-Sobre-React-Navigation)

## react-native-iphone-x-helper

> npm i react-native-iphone-x-helper
ou
> yarn add react-native-iphone-x-helper

[Mais em Doc](https://github.com/ptelad/react-native-iphone-x-helper)

## Axios
Biblioteca para lhe dar com requisições.

> yarn add axios

[Doc](https://github.com/axios/axios)

## Typecode - Json-server
Biblioteca para simular API fake. Rodar em super usuário.
> #npm install -g json-server

## Expo SVG
Para trabalhar e exibir imagens no formato svg (vetorizadas)
> expo install react-native-svg

[doc](https://docs.expo.io/versions/latest/sdk/svg/)

# Dia 01
  Foram realizados as pré configurações e estruturação do projeto.

  Explicado sobre hooks - useState 

# Dia 02

Neste dia foi realizado:
{X} Instalação de dependências
{X} Utilização de icons (expo)
{X} Utilização/ instalação de font externa (expo)
{X} Instalção font
{X} Navigation Stack

```Dica: Para garantir que todas as fonts sejam carregadas é recomendado usar o metodo de Expo Load (relatório de pendendências).
```
 Hack para SafeAreaView funcionar em android:
 
    Adiciona no CSS:
    ``` paddingTop: Platform.OS === 'android' ? 25 : 0 ```
    
    Import:
  ```
    import {Platform} from 'react-native';

  ```
### Criação UserIndetifdication
Tela para capturar o nome do usuário.

Dica: 
```KeyboardAvoidingView => React Native
  Usado para resolver questão do teclado.
  Usando como escopo que envolve todo código. Nessa exemplo usado depois do SafeAreaView.
```
Usado dentro do KeyboardAvoidingView
```behavior={Platform.OS === 'ios' ? 'padding': 'height'}```

Usando tipagem com useState <string>
```const [text, setText] = useState<string>()```
Usado no caso de não passar parâmentro de definição de tipo.

### Crianção arquivo Confirmation

### Usar Navigation

Dica:
```Para fechar o teclado clicando fora utilize o TouchableWithoutFeedback => React Native
<TouchableWithoutFeedback
    onPress={Keyboard.dimiss}> em volta da tela
  ```



# Dia 03

Criação da interface de escolha uma plantas.

## Header:
- [Instação da lib react-native-iphone-x-helper](##-react-native-iphone-x-helper)

Usar no css na propriedade marginTop para adicionar uma margem e ignorar o detalhe da tela do iphone-x.
```marginTop:getStatusBarHeight(),```

#### Dica - borderRadium:
Para formatar uma imagem ou bordar circulares a dica é colocar pelo menos 50% o tamanho do elemento original.

  Exemplo:

  ```tsx
  image: {
    width:80,
    height: 80,

    borderRadius:40, //50% do tamanho original.
  }
 ``` 
### Uso do react-native-gesture-handler 
recButton.

### Dica, acumular estilos.
Transforma o style em uma lista
ex.
```JS
  <Text style={[styles.stilo1,styles.estilo2]}>
```
### JSON
### Load

## Recap:
{x} Construção da tela de listar as plantas
{x} Animação no carregamento dos elementos
{x} Buscou dados da api (criada)
{x} Criação de filtros na API
{x} Carregamento gradativo dos elementos da tela
{x} Reaproveitamento de componente


[Lottie](https://lottiefiles.com/)
[Expo Lottie](https://docs.expo.io/versions/latest/sdk/lottie/)

Utilizando organização de lista via Expo SVG








# Referências:
## Mais informações sobre Expo:
- [GitHub - Expo/vector-icons](https://github.com/expo/vector-icons)
- [Documentação Expo](https://docs.expo.io/)
- [Repositório de consulta](https://icons.expo.fyi/)
- [GitHub - vector icons](https://github.com/oblador/react-native-vector-icons)
- [Lista de icons](https://oblador.github.io/react-native-vector-icons/)

## Mais Sobre React Navigation:
- [Documentação React Navigation](https://reactnavigation.org/)
- [Instação React Navigation](https://reactnavigation.org/docs/getting-started)
- [React Navigation Stack](https://reactnavigation.org/docs/hello-react-navigation)