import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "./Styles";
import {Remesas} from "./MainScreen";



interface ItemProps {
    item: Remesas;
    markDone: (Remesas: Remesas) => void;
    deleteFunction: (Remesas: Remesas) => void;
}

export default function RenderItem({
    item, 
    markDone, 
    deleteFunction,
}: ItemProps){
    return( 
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => markDone(item)}>
            <Text style={item.done ? styles.textoDone : styles.texto}>
              {item.title}
            </Text>
            <Text style={item.done ? styles.textoDone : styles.texto}>
               {new Date(item.date).toLocaleString()}
            </Text>
          </TouchableOpacity>
  
          {
            !item.done && 
            (
            <TouchableOpacity 
              style={styles.removeButton} 
              onPress={() => deleteFunction(item)}>
              <Text style={styles.whiteText}>Eliminar</Text>
            </TouchableOpacity>
            )
          }
  
        </View>
      );
}