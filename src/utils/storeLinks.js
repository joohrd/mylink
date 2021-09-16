
import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos
export async function getLinksSave(key){
  const myLinks = await AsyncStorage.getItem(key)

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

// Salvar o link no storage
export async function saveLink(key, newLink){
  let linksStore = await getLinksSave(key);

  // Se tiver algum link salvo com esse mesmo ID/ ou duplicado preciso ignorar.
  const hasLink = linksStore.some(link => link.id === newLink.id);

  if(hasLink){
    console.log('ESSE LINK JA EXISTE NA LISTA');
    return; // parar execucao
  }

  linksStore.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStore));
  console.log('LINK SALVO COM SUCESSO');
}

// Deletar algum link especfico
export async function deleteLink(links, id){
  let myLinks = links.filter((item) => {
    return(item.id !== id)
  })
  await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));

  console.log('LINK DELETADO DO STORAGE!!');

  return myLinks; 
}

