import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row', // Organiza os itens na horizontal (linha)
    marginTop: 50,
    alignItems: 'flex-start', // Alinha ao topo do container (eixo vertical, pois 'row' está ativo)
    justifyContent: 'space-between', // Espaço entre os itens
    marginLeft: -8,
  },
  messageIcon: {
    padding: 14, // Adiciona um preenchimento de 14 unidades ao redor do ícone.
    borderRadius: 100, // Torna o ícone redondo (raio de borda de 100 faz o círculo).
    flexDirection:'row',
    backgroundColor: '#E0E2E5', // Define a cor de fundo do ícone como um tom claro de cinza (cor específica em hexadecimal).
  },

  messageNumberContainer: {
    backgroundColor: '#F34BAC', // Define a cor de fundo do círculo de notificação com um tom de rosa.
    justifyContent: 'center', // Centraliza o conteúdo (número dentro do círculo).
    flexDirection: 'row', // Organiza os itens dentro do container na horizontal (isso é útil se você tiver mais de um item no futuro).
    width: 10, // Largura do círculo, 10 unidades.
    height: 10, // Altura do círculo, 10 unidades.
    borderRadius: 8, // Torna o círculo arredondado (raio de borda igual ao tamanho da largura/altura).
    alignItems: 'center', // Alinha os itens (número) no centro do círculo.
    position: 'absolute', // A posição do elemento é definida em relação ao seu contêiner pai.
    right: 10, // Coloca o círculo 10 unidades à direita do contêiner pai.
    top: 14, // Coloca o círculo 14 unidades para baixo do topo do contêiner pai.
  },

  messageNumber: {
    color: '#FFFFFF', // A cor do número será branca.
    fontSize: 6, // O tamanho da fonte do número é 6 unidades, bem pequeno.
    fontFamily: 'Inter_18pt-LightItalic', // A família da fonte é 'Inter', estilo 'LightItalic' (itálico claro), com tamanho 18pt.
  },
  userStoryContainer:{
  marginTop:80,
  width:'400',
  position: 'absolute',
  fontFamily:'Inter_18pt-SemiBoldItalic',

  },
});

export default globalStyle;
