import React, { useEffect, useState } from 'react';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './RenderItem';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Main: { username: string };
};

type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type MainScreenProps = {
  route: MainScreenRouteProp;
};

export interface Remesas {
  title: string;
  done: boolean;
  date: Date;
}

export default function MainScreen({ route }: MainScreenProps) {
    const { username } = route.params || {}; // Maneja el caso en que `username` pueda ser `undefined`

  const [text, setText] = useState('');
  const [Remesas, setRemesas] = useState<Remesas[]>([]);

  const storeData = async (value: Remesas[]) => {
    try {
      await AsyncStorage.setItem(`user_remesas_${username}`, JSON.stringify(value));
    } catch (e) {
      console.error("Error al guardar remesas:", e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(`user_remesas_${username}`);
      if (value !== null) {
        const remesaLocal = JSON.parse(value);
        setRemesas(remesaLocal);
      }
    } catch (e) {
      console.error("Error al cargar remesas:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addRemesas = () => {
    const tmp = [...Remesas];
    const newRemesa = { title: text, done: true, date: new Date() };
    tmp.push(newRemesa);
    setRemesas(tmp);
    storeData(tmp);
    setText('');
  };

  const markDone = (remesa: Remesas) => {
    const tmp = [...Remesas];
    const index = tmp.findIndex(el => el.title === remesa.title);
    if (index !== -1) {
      tmp[index].done = !tmp[index].done;
      setRemesas(tmp);
      storeData(tmp);
    }
  };

  const deleteFunction = (remesa: Remesas) => {
    const tmp = [...Remesas];
    const index = tmp.findIndex(el => el.title === remesa.title);
    tmp.splice(index, 1);
    setRemesas(tmp);
    storeData(tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Remesas Guardadas de {username}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Agregar una nueva remesa'
          placeholderTextColor="#A9A9A9"
          value={text}
          onChangeText={(t: string) => setText(t)}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text onPress={addRemesas} style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={Remesas}
        />
      </View>
    </View>
  );
}
