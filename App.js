

import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Banner from './components/Banner'
import { styles1, viewsChilds } from './assets/styles/Mystyles';
import { Button } from 'react-native-web';
import { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  //definicion de estados con respectivos metodos de actualizaciones
  const [Indentificacion, setIndentificacion] = useState('');
  const [Nombres, setNombres] = useState('');
  const [Asignatura, setAsignatura] = useState('');
  const [Nota1, setNota1] = useState('');
  const [Nota2, setNota2] = useState('');
  const [Nota3, setNota3] = useState('');
  const [Definititva, setDefinititva] = useState('');
  const [Observacion, setObservacion] = useState('');

  const [Registros, setRegistros] = useState([]);

  let refIndentificacion = useRef()

  //Metodos
  let calcular = (oper) => {
    //actualiza el estado resultado, a travez de su metodo respectivo
    let miresultado = 0;
    let miobs = 0;
    switch (oper) {
      case "GuardarCalcular":

        miresultado = parseFloat(Nota1) * 30 / 100 + parseFloat(Nota2) * 35 / 100 + parseFloat(Nota3) * 35 / 100

        if (miresultado >= 3) {
          miobs = "Aprueba"
        }else if (miresultado > 2 && miresultado < 2.9){
          miobs = "Habilita"
        }else if (miresultado < 2){
          miobs = "Reprueba"
        }

        setDefinititva(miresultado);
    setObservacion(miobs);
        //Agregar datos al array a través del método setRegistros para el array Registros
        setRegistros(miRegistros => [...miRegistros, { Indentificacion:Indentificacion, Nombres:Nombres, Asignatura:Asignatura, Nota1:Nota1, Nota2:Nota2, Nota3:Nota3, Definititva:Definititva, Observacion:Observacion }]);
        //console.log(Registros);

        // setNombre('');
        // setSalario('')

        refIndentificacion.current.focus();
        break;
      case "Buscar":
        let Identic = Registros.find(ide => ide.Indentificacion == Indentificacion);
        if (Identic != undefined) {
          setNombres(Identic.Nombres);
          setAsignatura(Identic.Asignatura);
          setNota1(Identic.Nota1);
          setNota2(Identic.Nota2);
          setNota3(Identic.Nota3);
          setDefinititva(Identic.Definititva);
          setObservacion(Identic.Observacion);
        }
        else {
          alert("Registro no hallado");
        }
        break;
    }
    
  }

  //metodo limpiar
  function limpiar() {
    setIndentificacion('');
    setNombres('');
    setAsignatura('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinititva(0);
    setObservacion('');

    // setresultado(0);
  }

  return (
    <View style={[styles1.container, styles1.alignViews, { borderRadius: 10, flexDirection: 'column' }]}>

      <View style={[viewsChilds.views, styles1.alignViews, { flex: 5, backgroundColor: '#8a2be2', marginBottom: 10 }]}>

        <Text style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}>Sistema de Notas</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>

        <TextInput
          placeholder='Identificacion'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          // keyboardTpe={Number}
          onChangeText={(Indentificacion => setIndentificacion(Indentificacion))}
          value={Indentificacion}
          // autoFocus
          ref={refIndentificacion}
        />
        <Text>{'\n'}</Text>
        <TextInput
          placeholder='Nombres'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          // keyboardTpe={Number}
          onChangeText={(Nombres => setNombres(Nombres))}
          value={Nombres}
        />
        <Text>{'\n'}</Text>
        <TextInput
          placeholder='Asignatura'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          // keyboardTpe={Number}
          onChangeText={(Asignatura => setAsignatura(Asignatura))}
          value={Asignatura}
        />
        <Text>{'\n'}</Text>
        {/* SE MULTIPLICAN LAS NOTAS PARA OBTENER Y DESPUES SE SUMAN LAS 3 */}
        <TextInput
          placeholder='Nota Momento 1 (30%)'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          keyboardTpe={Number}
          onChangeText={(Nota1 => setNota1(Nota1))}
          value={Nota1}
        />
        <Text>{'\n'}</Text>
        <TextInput
          placeholder='Nota Momento 2 (35%)'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          keyboardTpe={Number}
          onChangeText={(Nota2 => setNota2(Nota2))}
          value={Nota2}
        />
        <Text>{'\n'}</Text>
        <TextInput
          placeholder='Nota Momento 3 (35%)'
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          keyboardTpe={Number}
          onChangeText={(Nota3 => setNota3(Nota3))}
          value={Nota3}
        />
        <Text>{'\n'}</Text>
        <Text>Resultado</Text>
        <TextInput
          placeholder={parseFloat(Definititva).toFixed()}
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          keyboardTpe={Number}
          onChangeText={(Definititva => setDefinititva(Definititva))}
          value={Definititva}
        />
        <Text>{'\n'}</Text>
        <Text>Observacion</Text>
        <TextInput
          placeholder={parseFloat(Observacion).toFixed()}
          style={{ fontSize: 20, borderWidth: 2, padding: 10, textAling: 'center', borderColor: 'gray' }}
          // keyboardTpe={Number}
          onChangeText={(Observacion => setObservacion(Observacion))}
          value={Observacion}
        />

        {/* <Text>Resultado</Text>
        <Text>{parseFloat(resultado).toFixed()}</Text> */}
        <Text>{'\n'}</Text>
        <Button
          title="Calcular/Guardar"
          onPress={() => calcular("GuardarCalcular")}
        />
        <Text>{'\n'}</Text>
        <Button
          title="Limpiar"
          onPress={limpiar}
        />
        <Text>{'\n'}</Text>
        <Button
          title="Buscar"
          onPress={() => calcular("Buscar")}
        />


        {/* para listar */}
        <Text>{'\n'}</Text>
        <View>
          {
            Registros.map(ide => {
              return (
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                  <Text style={{ marginRight: 10 }}>{ide.Indentificacion}</Text>
                  <Text style={{ marginRight: 10 }}>{ide.Nombres}</Text>
                  <Text style={{ marginRight: 10 }}>{ide.Asignatura}</Text>
                  <Text style={{ marginRight: 10 }}>{new Intl.NumberFormat('es-CO').format(ide.Nota1)}</Text>
                  <Text style={{ marginRight: 10 }}>{new Intl.NumberFormat('es-CO').format(ide.Nota2)}</Text>
                  <Text style={{ marginRight: 10 }}>{new Intl.NumberFormat('es-CO').format(ide.Nota3)}</Text>
                  <Text style={{ marginRight: 10 }}>{new Intl.NumberFormat('es-CO').format(ide.Definititva)}</Text>
                  <Text style={{ marginRight: 10 }}>{ide.Observacion}</Text>
                </View>
              );
            })
          }
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
