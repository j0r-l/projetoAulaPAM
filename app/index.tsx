import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Index() {
  const nome = "vnCUS";

  return <View>
    <Text>Jogo da Velha</Text>
    <Text>Vencedor</Text>

    <View>
        <View>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
        </View> <View>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  </View>;
}
