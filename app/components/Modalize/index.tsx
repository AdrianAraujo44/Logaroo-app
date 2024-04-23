import { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ButtonModal, TextButton, TextInput, Title } from './styles';
import axios from 'axios';
import { usePosts } from '../../Contexts/PostContext';
import { useState } from 'react';
import { Toast } from 'toastify-react-native';

function ModalizeUI({ refe, data, setDataEdit }: { refe: any, data: any, setDataEdit:any }) {
  const snapPoints = useMemo(() => ["90%"], [])
  const { posts, setPosts } = usePosts()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const closeModal = useCallback(() => {
    refe.current?.dismiss();
  }, []);

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: content
      });
      setPosts([...posts,
      {
        id: posts.length == 0 ? 1 : posts[posts.length - 1]?.id + 1,
        title: response.data.title,
        body: response.data.body,
        userId: 1
      }
      ])
      closeModal()
      setTitle('')
      setContent('')
      setDataEdit(null)
      Toast.success("Post criado !")
    } catch (err) {
      Toast.error("Algo errado aconteceu!","TOP")
    }
  }

  const updatePost = async () => {
    const id = data.id
    if (id <= 100) {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          title,
          body: data.content
        })

        const index = posts.findIndex(item => item.id === id);
        if (index !== -1) {
          let aux = [...posts]
          aux[index].title = response.data.title;
          aux[index].body = response.data.body;
          setPosts(aux)
          closeModal()
          Toast.success("Post atualizado com sucesso!")
        } else {
          Toast.error("Algo errado aconteceu !", "TOP")
        }


      } catch (err) {
        Toast.error("Algo errado aconteceu !", "TOP")
      }
    } else {
      const index = posts.findIndex(item => item.id === id);
      if (index !== -1) {
        let aux = [...posts]
        aux[index].title = data.title || '';
        aux[index].body = data.content || '';
        setPosts(aux)
      } else {
        Toast.error("Algo errado aconteceu !", "TOP")
      }

      closeModal()
      Toast.success("Post atualizado com sucesso!")
    }
    setTitle('')
    setContent('')
  }

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={refe}
        index={0}
        snapPoints={snapPoints}
      >
        <Title>
          {data != null ? 'EDITAR POST' : 'ADICIONAR POST'}
        </Title>
        <BottomSheetView style={styles.contentContainer}>
          <TextInput
            placeholder="Digite um título"
            onChangeText={(title: string) => setTitle(title)}
            defaultValue={data != null ? data?.title : ''}
          />
          <TextInput
            multiline={true}
            placeholder="Digite um conteúdo"
            numberOfLines={4}
            onChangeText={(content: string) => setContent(content)}
            defaultValue={data != null ? data?.content : ''}

          />
          <ButtonModal onPress={data == null ? createPost: updatePost}>
            <TextButton>Salvar</TextButton>
          </ButtonModal>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
});

export default ModalizeUI