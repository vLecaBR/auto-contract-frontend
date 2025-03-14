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
  gap: 20px;
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
  font-size: 1.2em;
  color: #333;
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
    camarim: "",
    capacidadeLocal: "",
    cep: "",
    cepPF: "",
    cepRepLegal: "",
    cidade: "",
    cidadePF: "",
    cpfCnpj: "",
    cpfPF: "",
    cpfRepLegal: "",
    data: "",
    dataDeposito1: "",
    dataDeposito2: "",
    deposito1: "",
    deposito2: "",
    efeitos: "",
    emailPF: "",
    emailPJ: "",
    enderecoCasa: "",
    enderecoHotel: "",
    enderecoPF: "",
    enderecoPJ: "",
    enderecoRepLegal: "",
    evento: "",
    horarioEvento: "",
    horarioPalco: "",
    hospitalidade: "",
    id: "",
    logistica: "",
    nomeCasa: "",
    nomeContratantePF: "",
    nomeContratantePJ: "",
    representanteLegal: "",
    rgPF: "",
    rgRepLegal: "",
    telefoneContatoPF: "",
    telefoneContatoPJ: "",
    valorShow: ""
  });

  const artistas = ["Artista 1", "Artista 2", "Artista 3"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/contracts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Contrato gerado com sucesso! Baixe em: " + data.pdfPath);
      } else {
        alert("Erro ao gerar contrato: " + data.error);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Container>
      <Title>Formulário de Contrato</Title>
      <Form onSubmit={handleSubmit}>
        
        {/* Seção 1: Dados do Evento */}
        <SectionTitle>Dados do Evento</SectionTitle>
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
          name="logistica" 
          placeholder="Logística" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="hospitalidade" 
          placeholder="Hospitalidade" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="enderecoHotel" 
          placeholder="Endereço do Hotel" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="efeitos" 
          placeholder="Efeitos" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="camarim" 
          placeholder="Camarim" 
          onChange={handleChange} 
        />
        
        {/* Seção 2: Depósitos */}
        <SectionTitle>Depósitos</SectionTitle>
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
          type="date" 
          name="dataDeposito1" 
          placeholder="Data do 1º Depósito" 
          onChange={handleChange} 
        />
        <Input 
          type="date" 
          name="dataDeposito2" 
          placeholder="Data do 2º Depósito" 
          onChange={handleChange} 
        />

        {/* Seção 3: Dados do Contratante - Pessoa Jurídica */}
        <SectionTitle>Dados do Contratante - Pessoa Jurídica</SectionTitle>
        <Input 
          type="text" 
          name="nomeContratantePJ" 
          placeholder="Nome do Contratante PJ" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cpfCnpj" 
          placeholder="CPF/CNPJ" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="enderecoPJ" 
          placeholder="Endereço" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="telefoneContatoPJ" 
          placeholder="Telefone Contato" 
          onChange={handleChange} 
        />
        <Input 
          type="email" 
          name="emailPJ" 
          placeholder="Email" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="representanteLegal" 
          placeholder="Representante Legal" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="enderecoRepLegal" 
          placeholder="Endereço do Representante Legal" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cepRepLegal" 
          placeholder="CEP" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="rgRepLegal" 
          placeholder="RG" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cpfRepLegal" 
          placeholder="CPF" 
          onChange={handleChange} 
        />

        {/* Seção 4: Dados do Contratante - Pessoa Física */}
        <SectionTitle>Dados do Contratante - Pessoa Física</SectionTitle>
        <Input 
          type="text" 
          name="nomeContratantePF" 
          placeholder="Nome do Contratante PF" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="enderecoPF" 
          placeholder="Endereço" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cepPF" 
          placeholder="CEP" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cidadePF" 
          placeholder="Cidade" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="telefoneContatoPF" 
          placeholder="Telefone Contato" 
          onChange={handleChange} 
        />
        <Input 
          type="email" 
          name="emailPF" 
          placeholder="Email" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="rgPF" 
          placeholder="RG" 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          name="cpfPF" 
          placeholder="CPF" 
          onChange={handleChange} 
        />
        
        {/* Botão de envio */}
        <Button type="submit">Gerar Contrato</Button>
      </Form>
    </Container>
  );
};

export default ContractForm;
