import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useState } from 'react';
import { useRef } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ModalizeUI from './app/components/Modalize';
import { PostProvider } from './app/Contexts/PostContext';
import Home from './app/screen/Home';
import ToastManager from 'toastify-react-native'

export default function App() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [dataEdit, setDataEdit] = useState(null)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PostProvider>
          <StatusBar />
          <Home refe={bottomSheetModalRef} dataEdit={dataEdit} setDataEdit={setDataEdit}/>
          <ModalizeUI 
            data={dataEdit}
            refe={bottomSheetModalRef}
            setDataEdit={setDataEdit}
        />
        </PostProvider>
        <ToastManager />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}