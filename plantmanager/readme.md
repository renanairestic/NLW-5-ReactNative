# Projeto NLW5 Rocketseat - 2021
> Sobre o projeto

# SUMÁRIO
- [Dia 01](#Dia-01)
- [Dia 02](#Dia-02)
- [Dia 03](#Dia-03)

- [Referências](#Referências)

# LISTA DE DEPENDÊNCIAS:

* Expo Vector:

Para trabalhar com icons.

> expo install @expo/vector-icons

[Referências](##Mais-informações-sobre-Expo:)

* Font - Jost (Google Fonts via Expo)

> expo install expo-font @expo-google-fonts/jost

[Referência/docs](https://docs.expo.io/guides/using-custom-fonts/)
  
  * Expo App Loading
  > expo install expo-app-loading 

  [Documentação](https://docs.expo.io/versions/latest/sdk/app-loading/)

* React Navigation
> yarn add @react-navigation/native

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

> yarn add @react-navigation/stack

[Referências](##Mais-Sobre-React-Navigation)

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

Criação da interface de escolha uma planta

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