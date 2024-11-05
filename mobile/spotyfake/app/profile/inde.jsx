import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from 'react-native'

export default profile = () => {

    return(
        <View style={style.container}>

            <View style={style.quadrado}>
                <View style={style.partadafoto}>
                    <Text style={style.titulo}>Seu Perfil</Text>
                     {/* isso aqui é um view pra subir as coisa no condrado, ta tudo subindo, literalemnete tudo
                     que t adentro da viwe "quadrado" ta subinddo , pra colocar pra baixo usa o margintop */}
                    <Image style={style.fotoeu} source={require('../../assets/images/eu.jpg')}/>
                </View>

                <View style={style.playlist1}>

                     <Text>Metal Musisc</Text>

                </View>
            </View>    
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    quadrado: {
        width: 320,
        height: 460,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 20, 
    },

     partadafoto:{
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    titulo: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',    
        
    },

    fotoeu: {
        width: 98,
        height: 98,
        borderRadius: 50,
      },

      playlist1:{
        width: 32,
        height: 46,
            justifyContent: 'flex-start',
            alignItems: 'center',
        backgroundColor: 'fd1100',
        borderRadius: 20,
        padding: 20, 
      },
      
    },
)