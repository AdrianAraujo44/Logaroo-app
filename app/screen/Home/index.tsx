import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import Post from "../../components/Post"
import { usePosts } from "../../Contexts/PostContext"
import { Body, Container, Header, SubText, TitleText, Footer, Button, TextButton } from "./styles"
import { useCallback } from 'react';

function Home({refe, dataEdit, setDataEdit }:any) {
  const { posts } = usePosts()

  const handlePresentModalPress = useCallback(() => {
    setDataEdit(null)
    refe?.current?.present();
  }, []);

  return (
    <Container>
        <Header>
          <TitleText>LOGAROO</TitleText>
          <SubText>[TESTE] FRONTEND</SubText>
        </Header>
        <Body
          data={posts}
          renderItem={({ item }: any) => {
            return (
              <Post 
                title={item.title} 
                content={item.body} 
                id={item.id}
                dataEdit={dataEdit} 
                setDataEdit={setDataEdit} 
                refe={refe}/>
            )
          }}
        />
        <Footer>
          <Button onPress={handlePresentModalPress}>
            <TextButton>ADICIONAR NOVO POST</TextButton>
          </Button>
        </Footer>
    </Container>
  )
}
export default Home