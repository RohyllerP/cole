import React from 'react'

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading } from '@chakra-ui/react'

function index() {
  return (
    <Box mx="1.3em" border="2px">
      <Tabs>
        <TabList>
          <Tab><Text>Castellano</Text></Tab>
          <Tab><Text>Ingles</Text></Tab>
          <Tab><Text>Matematica</Text></Tab>
          <Tab><Text>EducacionFisica</Text></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading>En mantenimiento</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>En mantenimiento</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>En mantenimiento</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>En mantenimiento</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Tabs>
          <TabList>
            <Tab><Text>Fisica</Text></Tab>
            <Tab><Text>Quimica</Text></Tab>
            <Tab><Text>Biologia</Text></Tab>
            <Tab><Text>GHC</Text></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <Tabs>
          <TabList>
            <Tab>Premilitar</Tab>
            <Tab>Religion</Tab>
            <Tab>Proyecto</Tab>
            <Tab>Ciencias</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading>En mantenimiento</Heading> 
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>En mantenimiento</Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default index