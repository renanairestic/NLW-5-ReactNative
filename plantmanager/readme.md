# Projeto NLW5 Rocketseat - 2021
## Sobre o projeto
  
  App desenvolvido durante a NLW5.
  Consiste em um app de cadastro  e lembrete de regar as plantas. 
  Aconteceu durante os dias 19 até 23 de abril de 2021, cada dia sendo liberado uma parte da prática. 
  
## Tecnologias

- Expo
- React Native
  - React Navigation
  - React AsyncStorage
- TypeScript


# SUMÁRIO

 ## [Dia 01](#Dia-01) | [Dia 02](#Dia-02) | [Dia 03](#Dia-03) | [Dia 04](#Dia-04) | [Dia 05](#Dia-05)

- [Passo a passo para rodar o app](#Rodar-o-App)
- [Adicional ao Projeto](#Adicional-ao-Projeto)
- [Lista de Dependências Instaladas](#LISTA-DE-DEPENDENCIAS)
- [Referências](#Referências)


# Passo a Passo

  Aqui vou listar um passo a passo para você rodar o app no seu PC.
  Após baixar os arquivos do GITHUB:

  1 - Abra no VS Code
    a. Talvez precise instalar algumas dependências, segue o guia [Dependências](#LISTA-DE-DEPENDÊNCIAS)
  
  2 - Digite o comando em seu terminal para iniciar o App
  > expo start
  Esse projeto foi construido com auxilio do expo, portanto esse será o comando para iniciar.

  3 - Procure o arquivo ['./src/services/api.ts]:
    Altere a linha 3:
  
```js
    const api = axios.create({  baseURL:'http://###.###.#.##:3333'}); 
```
    Altere os ###.###.#.## pelo seu IP  
    exemplo se seu IP for **192.168.1.64**
    deve ficar assim:
  
```js
    const api = axios.create({  baseURL:'http://192.168.1.64:3333'}); 
```

  Caso não saiba seu IP, verifique o IP no navegador em que o expo abriu.

  4 - Para iniciar a API prória rode o comando no terminal:
  
  > json-server ./src/services/server.json --host ###.###.#.## --port 3333 --delay 700 

  No lugar dos "###.###.#.##" insira o IP do seu PC. 

  5 - Se tudo deu certo o App deve está abrindo e funcionando.




> Aqui estão minha anotações:

# Dia 01
  Foram realizados as pré configurações e estruturação do projeto.

  Explicado sobre hooks - useState 
  
  [Instalação Expo Vector](##Expo-Vector)
  

# Dia 02

Neste dia foi realizado:
{X} Instalação de dependências
{X} Utilização de icons (expo)
{X} Utilização/ instalação de font externa (expo)
{X} Instalção font
{X} Navigation Stack

```Dica: Para garantir que todas as fonts sejam carregadas é recomendado usar o metodo de Expo Load (relatório de pendendências).
```
[Instalação Font Google](##Font-Jost-(Google-Fonts-via-Expo)

 Hack para SafeAreaView funcionar em Android:
 
 ``Essa dica foi retidada da comunidade no Discord``
 
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

Nessa etapa foi instalado a dependência Expo App Loading

-[Instalação App Loading](##Expo-App-Loading)

### Usar Navigation

Dica:
```Para fechar o teclado clicando fora utilize o TouchableWithoutFeedback => React Native
<TouchableWithoutFeedback
    onPress={Keyboard.dimiss}> em volta da tela
  ```

- [Instalação Navigation](##React-Navigation)


# Dia 03

Criação da interface de escolha uma plantas.

## Header:
- [Instação da lib react-native-iphone-x-helper](##react-native-iphone-x-helper)

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
### Dependências

- [Axios](##Axios)

#### API
- [Typecode - Json-server](##Typecode-Json-server)

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
- [Instalação Expo SVG](##Expo-SVG)

# Dia 04

## Configurar a validação de acesso

  Quando o usuário entra no app é solicitado um nome, liberar o progresso posterior o preenchimento do nome.

  ```JS
  if(!name)
      return Alert.alert('Me diz como chamar você 😢️');
  ```

## AsyncStorage
  [Instalação](##AsyncStorage)

  ### SET:
```js
        AsyncStorage.setItem('@plantmanager:user',name);
```
Utiliza sempre 2 parametros,
1 - Recomenda usar o padrão inicio com "**@**" seguido do nome do app **plantmanager** "**:**" o que será salvado **user**;
 
2 - O que vai ser armazenado (persistido). **name** 

Usar em uma função assincrona ( **async** )

 ### GET:

```js
     async function loadStorageUserName(){
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || 'Anônimo')
    }
    loadStorageUserName();
```
Quando manipula dados com async ele trabalha com promece, ou seja, que pode ter um daley na busaca desses dados. Por esse motivo é usado em funções async com await.

### correção da flatList
  Por questões de usabilidade é recomendado identificar key para os itens da lista.

### Boa Prática:
  Converter as id e key em string nos flatList String(item.key) ou String(item.key).


### Passar dados entre as telas
Fou usado a dependência @react-navigation/core propriedade useRoute para buscar dados entre as telas.

### Expo DataTimePicker

- [Instalação](##Expo-DataTimePicker)

### date-fns
- [Instalação](##date-fns)

Cunstomização de hora tanto para Android como para ios.

### Refatoração de interface
  Quando uma interface está sendo usado várias vezes é recomendado criar um componente exclusivo. [storage]('./src/libs/storage.ts')
  Foi usado nos arquivos [PlantSave]('./src/pages/PlantSave.tsx) e [PlantSelect]('./src/pages/PlantSelect.tsx')

  
### Tab-bar
- [Instalação](##react-navigation-tabs)

Criado navegação tab-bar para nova plantas e minhas plantas.

# Dia 5
## Expo Local Notification
- [Instalação](##Expo-local-Notification)

Foi realizado a explicação conceitural sobre a lib.

# Dicas:
## Remover todos dados salvo do Async

 Excluir todos dados do banco (plantas salvas)

```js    

 async function clearAllData() {
     await AsyncStorage.getAllKeys()
          .then(keys => AsyncStorage.multiRemove(keys))
          .then(() => alert('success')); }
  ```

# Adicional ao Projeto:
  {x} Implementar botão de voltar no **PlantSave** (conforme o projeto Figma propõe);
  {x} Correção e inclusão do título sugerido no produto na página MyPlants "Minhas plantinhas";

## goback - react Navigation:

```js
  () => navigation.goBack()
```

``Sugestão @pfluck - Comunidade Rockseat - React Native (Discord)``

## Título e subtitulo MyPlants

```js
 <View style={styles.containerTitle}>
       <View>
        <Text style={styles.title}>Minhas</Text>
        <Text style={styles.subtitle}>Plantinhas</Text>
       </View>
      <Image source={userImg} style={styles.image}/>
     </View>
```

# LISTA DE DEPENDÊNCIAS

## Expo Vector

Para trabalhar com icons.
Comando do terminal:

> expo install @expo/vector-icons

[Referências](##Mais-informações-sobre-Expo)

## Font - Jost (Google Fonts via Expo)
Comando do terminal:

> expo install expo-font @expo-google-fonts/jost

[Referência/docs](https://docs.expo.io/guides/using-custom-fonts/)
  
### Expo App Loading
Comando do terminal:

  > expo install expo-app-loading 

  [Documentação](https://docs.expo.io/versions/latest/sdk/app-loading/)

## React Navigation
Comandos do terminal:

> yarn add @react-navigation/native

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

> yarn add @react-navigation/stack

[Referências](##Mais-Sobre-React-Navigation)

## react-native-iphone-x-helper
Comando do terminal:

> npm i react-native-iphone-x-helper
ou
> yarn add react-native-iphone-x-helper

[Mais em Doc](https://github.com/ptelad/react-native-iphone-x-helper)

## Axios
Biblioteca para trabalhar com requisições.
Comando do terminal:

> yarn add axios

[Doc](https://github.com/axios/axios)

## AsyncStorage
  Persitência de dados
  Comando do terminal:

  > expo install @react-native-async-storage/async-storage

  [Doc Expo  AsyncStorage](https://docs.expo.io/versions/latest/sdk/async-storage/)

## Typecode - Json-server
Biblioteca para simular API fake. Rodar em super usuário.

Comando do terminal:
> #npm install -g json-server

Note que esse comendo precisa ser rodado com acesso ao super usuário, no linux rode o comando su antes do comando e digite a sua senha. 

## Expo SVG
Para trabalhar e exibir imagens no formato svg (vetorizadas)

Comando do terminal:
> expo install react-native-svg

[doc](https://docs.expo.io/versions/latest/sdk/svg/)

## Expo-DataTimePicker

Comando do terminal:

> expo install @react-native-community/datetimepicker

[Doc Expo DateTimePicker](https://docs.expo.io/versions/latest/sdk/date-time-picker/)

## date-fns

Comando do terminal:

> yarn add date-fns

[Documentação date-fns](https://date-fns.org/docs/Getting-Started)

## react navigation tabs

Comando do terminal:

> yarn add @react-navigation/bottom-tabs

[Documentação tab-navigation](https://reactnavigation.org/docs/tab-based-navigation)

## Expo local Notification

Comando do terminal: 

> expo install expo-notifications

[Documentação Expo Local Notifications](https://docs.expo.io/versions/latest/sdk/notifications/)

# Referências:
## assets
- [Imagem do perfil - Flaticon (Link externo)](https://www.flaticon.com/br/)

## Projeto Oficial 
- [github](https://github.com/birobirobiro/nlw-05-plantmanager)

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
