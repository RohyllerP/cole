import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Button,
  Stack,
  Avatar,
  useColorModeValue,

} from "@chakra-ui/react";
import Title from "../../styles/theme/components/cardOne";
import Images from '../Carousel/index.jsx';
import Link from "next/link";

export default function Home() {
  const bg2 = useColorModeValue("white", "colors.quinto");
  return (
    <Box>
      <Box display={['none', 'none', 'block', 'block']}>
        <Images />
      </Box>
      <Box p="2em">
        <Grid
          display={['block', 'block', 'grid', 'grid']}
          gap="5em"
          templateColumns="repeat(2, 1fr)"
        >
          <Box mt="20px" textAlign="justify" p="35px" bg={bg2}>
            <Heading>Diseño de un portal web como alternativa de solución para mejorar la Calidad
              evaluativa online del docente de 5to A, En el Colegio María Santísima Rastrojos Estado Lara
            </Heading>
            <Box py="35px" align="center">
              <Text fontWeight="600" fontSize="2xl">Rohyller Pereira</Text>
              <Avatar size='2xl' name='Rohyller' src='/img/yo.jpg.jpg' />
            </Box>
          </Box>
          <Box
            ml={['0', '0', '10em', '10em']}
            mt="20px"
            bg={bg2}>
            <Title titulo="Usuarios" />
            <Box pb="50px" px="40px">
              <Stack spacing="30px">
                <Box>
                  <Button w="100%" variant="primary">
                      <Link href="/Docentes"><Text><a>Administracion</a></Text></Link>
                  </Button>
                </Box>
                <Box>
                  <Button w="100%" variant="primary" >
                      <Link href="/cae"><Text><a>Estudiantes</a></Text></Link>
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
