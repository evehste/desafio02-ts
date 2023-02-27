import { useState } from 'react';
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

  const [email, setEmail ] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return(
    <Center>
      <Box backgroundColor="#fff" borderRadius="10px" padding="3%" width="50%">
        {/*{
          (userData == null && userData == undefined) 
          && <h1>Loading...</h1>
        } */}
        <Center>
          <Heading color='#805ad5' as='h2' size='lg' marginBottom="20px">Login</Heading>
        </Center>
        <Stack spacing={5}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<EmailIcon color='gray.300' />} />
            <Input placeholder={"Email"} type={"email"} 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.300' />} />
            <Input placeholder={"Senha"} type={"senha"}
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </InputGroup>
        </Stack>
        <Center>
          <ButtonDefault actionButton={() => login(email)} />
        </Center>
      </Box>
    </Center>
  )
}