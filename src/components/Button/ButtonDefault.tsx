import { Button } from '@chakra-ui/react';

interface IButtonDefault {
    actionButton: () => void;
}

export const ButtonDefault = ({actionButton}: IButtonDefault) => {
    return (
        <Button colorScheme='purple' marginTop="20px" width="100%" onClick={actionButton}>Entrar</Button>
    )
}
