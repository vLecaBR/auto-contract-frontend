import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const ContractForm = () => {
  const [formData, setFormData] = useState({
    artista: "",
    evento: "",
    data: "",
    horarioEvento: "",
    horarioPalco: "",
    nomeCasa: "",
    capacidadeLocal: "",
    enderecoCasa: "",
    cep: "",
    cidade: "",
    logistica: "",
    hospitalidade: "",
    enderecoHotel: "",
    efeitos: "",
    camarim: "",
    valorShow: "",
    deposito1: "",
    deposito2: "",
    dataDeposito1: "",
    dataDeposito2: "",
    nomeContratantePJ: "",
    cpfCnpj: "",
    enderecoPJ: "",
    telefoneContatoPJ: "",
    emailPJ: "",
    representanteLegal: "",
    enderecoRepLegal: "",
    cepRepLegal: "",
    rgRepLegal: "",
    cpfRepLegal: "",
    nomeContratantePF: "",
    enderecoPF: "",
    cepPF: "",
    cidadePF: "",
    telefoneContatoPF: "",
    emailPF: "",
    rgPF: "",
    cpfPF: "",
  });

  const artistas = ["Artista 1", "Artista 2", "Artista 3"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui vamos enviar os dados para o backend
  };

  return (
    <Container>
      <Title>Formulário de Contrato</Title>
      <Form onSubmit={handleSubmit}>
        <Select name="artista" onChange={handleChange}>
          <option value="">Selecione um Artista</option>
          {artistas.map((artista, index) => (
            <option key={index} value={artista}>{artista}</option>
          ))}
        </Select>
        <Input 
          type="text" 
          name="evento" 
          placeholder="Nome do Evento" 
          onChange={handleChange} 
          />
        <Input 
          type="date" 
          name="data" 
          onChange={handleChange} 
          />
        <Input 
          type="time" 
          name="horarioEvento" 
          placeholder="Horário do Evento" 
          onChange={handleChange} 
          />
        <Input 
          type="time" 
          name="horarioPalco" 
          placeholder="Horário no Palco" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="nomeCasa" 
          placeholder="Nome da Casa" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="capacidadeLocal" 
          placeholder="Capacidade do Local" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="enderecoCasa" 
          placeholder="Endereço da Casa" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="cep" 
          placeholder="CEP" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="cidade" 
          placeholder="Cidade" 
          onChange={handleChange} 
          />
        <Input 
          type="text" 
          name="valorShow" 
          placeholder="Valor do Show" 
          onChange={handleChange} 
          />
        <Input 
          type="number" 
          name="deposito1" 
          placeholder="1º Depósito (Sinal)" 
          onChange={handleChange} 
          />
        <Input 
          type="number" 
          name="deposito2" 
          placeholder="2º Depósito" 
          onChange={handleChange} 
          />
        <Input 
          type="date" name="dataDeposito1" placeholder="Data do 1º Depósito" onChange={handleChange} />
        <Input type="date" name="dataDeposito2" placeholder="Data do 2º Depósito" onChange={handleChange} />
        <Button type="submit">Gerar Contrato</Button>
      </Form>
    </Container>
  );
};

export default ContractForm;