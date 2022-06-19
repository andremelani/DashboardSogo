/* eslint-disable eqeqeq */
import { Input } from "../components/Input/Input";
import { Form } from "../components/Form/Form";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api/api";
import { MaskInput } from "../components/InputMask/inputMask";
import Swal from "sweetalert2";

type IFormState = {
  nome: string;
  sobrenome: string;
  cpf: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
};

const Prestador = () => {
  const { register, handleSubmit } = useForm<IFormState>();

  // Constante de envio do formulário postando as informaçoes registradas no mesmo

  const onSubmit: SubmitHandler<IFormState> = async (data) => {
    //condição de verificação para ver se os campos obrigatórios foram registrados
    if (
      formState.nome != "" &&
      formState.sobrenome != "" &&
      formState.cpf != "" &&
      formState.cep != "" &&
      formState.estado != "" &&
      formState.cidade != "" &&
      formState.bairro != "" &&
      formState.rua != "" &&
      formState.numero != ""
    ) {
      try {
        const response = await api.post(`/prestador`, data);
        console.log(response.data);

        //Registro com sucesso, aparece um Alerta de confirmação 
        Swal.fire({
          title: "Cadastro realizado com sucesso!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
        //Setando os campos para vazios novamente depois do formulário ser preenchido
        setFormState({
          nome: "",
          sobrenome: "",
          cpf: "",
          cep: "",
          estado: "",
          cidade: "",
          bairro: "",
          rua: "",
          numero: "",
          complemento: "",
        });
      } catch (error) {
        console.log("");
      }
    } else {

      //Alerta com o erro de que todos os campos não foram preenchidos 
      Swal.fire({
        icon: "error",
        text: "Preencha todos os campos obrigatórios!",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });
    }
  };

  const [formState, setFormState] = useState<IFormState>({
    nome: "",
    sobrenome: "",
    cpf: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  //Função que atualiza a cada alteração feita nos inputs
  const changeForm = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title text="Cadastrar Prestador" size="large" />
      <Form>
        <Input
          {...register("nome")}
          label="Nome*"
          id="nome"
          name="nome"
          value={formState.nome}
          onChange={changeForm}
        ></Input>
        <Input
          {...register("sobrenome")}
          label="Sobrenome*"
          id="sobrenome"
          name="sobrenome"
          value={formState.sobrenome}
          onChange={changeForm}
        ></Input>
        <MaskInput
          mask="cpf"
          type="cpf"
          label="CPF*"
          {...register("cpf")}
          id="cpf"
          name="cpf"
          value={formState.cpf}
          onChange={changeForm}
        />
        <MaskInput
          mask="cep"
          type="cep"
          label="CEP*"
          {...register("cep")}
          id="cep"
          name="cep"
          value={formState.cep}
          onChange={changeForm}
        />
        <Input
          label="Estado*"
          {...register("estado")}
          id="estado"
          name="estado"
          value={formState.estado}
          onChange={changeForm}
        ></Input>
        <Input
          label="Cidade*"
          {...register("cidade")}
          id="cidade"
          name="cidade"
          value={formState.cidade}
          onChange={changeForm}
        ></Input>
        <Input
          label="Bairro*"
          {...register("bairro")}
          id="bairro"
          name="bairro"
          value={formState.bairro}
          onChange={changeForm}
        ></Input>
        <Input
          label="Rua*"
          {...register("rua")}
          id="rua"
          name="rua"
          value={formState.rua}
          onChange={changeForm}
        ></Input>
        <Input
          label="Número*"
          {...register("numero")}
          id="numero"
          name="numero"
          value={formState.numero}
          onChange={changeForm}
        ></Input>
        <Input
          label="Complemento"
          {...register("complemento")}
          id="complemento"
          name="complemento"
          value={formState.complemento}
          onChange={changeForm}
        ></Input>
      </Form>
      <Button onClick={handleSubmit(onSubmit)} type="primary">
        Cadastrar
      </Button>
    </>
  );
};

export default Prestador;
