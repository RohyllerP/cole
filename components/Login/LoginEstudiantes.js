import {
  Box,
  Heading,
  Input,
  chakra,
  Stack,
} from "@chakra-ui/react";
/* import firebaseApp from "../../firebase/firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);
*/

function Login() {
  /* const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docuRef = doc(firestore, `hola/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    
    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  */
  return (
    <Box py="4em" w="500px" marginLeft="auto" marginRight="auto" mb="5em">
      <Heading as="h1" my="10px">Inicia sesión</Heading>
      <form>
        <Stack spacing="24px">
        <chakra.label>
          Correo electrónico:
          <Input type="email" variant='filled' placeholder='Correo' id="email" />
        </chakra.label>

        <chakra.label>
          Contraseña:
          <Input type="password" variant='filled' placeholder='Contraseña' id="password" />
        </chakra.label>

        <Input
          type="submit"
          backgroundColor="colors.secondary"
          color="white"
          cursor="pointer"

        />
        </Stack>
      </form>
    </Box>
  );
}

export default Login;