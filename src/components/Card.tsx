import { 
  Input,  
  Center,
  Box,
  Stack,
  Heading,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';

import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import { login } from '../services/login';
import { ButtonDefault } from '../components/Button/ButtonDefault';

export const Card = () => {
  return(
    <Box minHeight="100vh" paddingTop="5%" bgGradient='linear(to-b, #1d1828, #530f7a)'>
        <Center>
          <Box backgroundColor="#fff" borderRadius="10px" padding="3%" width="50%">
            <Center>
              <Heading color='#805ad5' as='h2' size='lg' marginBottom="20px">Login</Heading>
            </Center>
            <Stack spacing={5}>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<EmailIcon color='gray.300' />} />
                <Input placeholder={"Email"} type={"email"}/>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.300' />} />
                <Input placeholder={"Senha"} type={"senha"}/>
              </InputGroup>
            </Stack>
            <Center>
              <ButtonDefault actionButton={login} />
            </Center>
          </Box>
        </Center>
      </Box>
  )
}