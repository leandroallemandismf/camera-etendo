import { StyleSheet } from "react-native"
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera"

function App() {

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
    }
  })
  
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()

  if (!hasPermission) return requestPermission();
  if (device == null) return <></>
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  )
}

export default App