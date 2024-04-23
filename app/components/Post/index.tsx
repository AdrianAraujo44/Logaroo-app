import axios from "axios"
import { useCallback, useState } from "react"
import { Toast } from "toastify-react-native"
import { usePosts } from "../../Contexts/PostContext"
import { Body, Title, Container, BasicText, Button, GroupButton, SeconddaryButton } from "./styles"

function Post({ title, content, id, refe, dataEdit, setDataEdit }: { dataEdit: any, setDataEdit: any, title: string, content: string, id: number, refe:any }) {
  const [openPost, setOpenPost] = useState<boolean>(false)
  const { posts, setPosts } = usePosts()

  const handlePresentModalPress = useCallback(() => {
    refe.current?.present();
    setDataEdit({
      title,
      content,
      id
    })
  }, []);

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const updatePost = posts.filter(objeto => objeto.id !== id)
      setPosts(updatePost)
      Toast.success("Post deletado com sucesso!")
    } catch (err) {
      console.log("Algo errado aconteceu !")
    }
  }

  return (
    <Container onPress={() => setOpenPost(!openPost)} >
      <Title>
        {title}
      </Title>
      {
        openPost && (
          <Body>
            <BasicText color={"#666"}>
              {content}
            </BasicText>
            <GroupButton>
              <SeconddaryButton onPress={handlePresentModalPress}>
                <BasicText color={"#e8833a"}>
                  Editar
                </BasicText>
              </SeconddaryButton>
              <Button>
                <BasicText color={"#fff"} onPress={() => deletePost(id)}>
                  Excluir
                </BasicText>
              </Button>
            </GroupButton>
          </Body>
        )
      }
    </Container>
  )
}

export default Post