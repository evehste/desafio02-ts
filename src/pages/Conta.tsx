import { useEffect, useState } from "react";
import {Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { api } from '../api';
import { useParams, useNavigate } from "react-router-dom";

interface IUserData {
    id: string,
    email: string,
    password: string,
    name: string,
    balance: number
  }

const Conta = () => {
    const [userData, setUserData] = useState<null | IUserData>();

    useEffect(() => {
      const getData =async () => {
        const data: any | IUserData = await api;
        setUserData(data);
      }
      getData();
    }, []);

    const actualDate= new Date();
    const formatActualDate = `${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`;

    const {id} = useParams();
    const navigate = useNavigate();

    if(userData && id !== userData.id){
        navigate("/");
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={4}>
                {
                    (userData === undefined || userData === null) ?
                    (
                        <Center>
                            <Spinner size={"xl"} color="white"/>
                        </Center>
                    ):
                    (
                        <>
                            <CardInfo mainContent={`Bem Vindo(a) ${userData?.name}`} content={formatActualDate}/>
                            <CardInfo mainContent={"Saldo"} content={`R$ ${userData?.balance}`} />
                        </>
                    )
                    }
            </SimpleGrid>
        </Center>
    )
}
//

export default Conta;