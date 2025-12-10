import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Avatar, Button } from "react-native-paper";

const imageSource = require("../assets/foto.jpeg")


export default function ProfileScreen() {
  const nome = "Ezequiel Borges";
  const cargo = "Estudante de Análise e Desenvolvimento de Sistemas";

  const resumo =
    "Estudante de ADS buscando oportunidade de estágio ou trabalho na área de tecnologia. Experiência com projetos acadêmicos, boa base em desenvolvimento web, banco de dados, além de boa comunicação e trabalho em equipe.";

  const experiencias = [
    {
      id: "1",
      empresa: "Residência Acadêmica — Accenture",
      periodo: "2025.1",
      descricao:
        "Projeto de geração de culturas através de computação quântica.",
    },
    {
      id: "2",
      empresa: "Projeto Integrador — Point",
      periodo: "2024.2",
      descricao:
        "Desenvolvimento de aplicativo centralizador e organizador de eventos.",
    },
    {
      id: "3",
      empresa: "Projeto Integrador — CBMPE",
      periodo: "2025",
      descricao:
        "Sistema para auxiliar no registro de ocorrências para a CBMPE.",
    },
  ];

  const habilidades = [
    "HTML/CSS ",
    "JavaScript",
    "React",
    "MySQL",
    "GitHub, Canva, Miro, Figma",
    "Inglês avançado",
  ];

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.header}>
          <Avatar.Image size={110} source={imageSource} style={styles.avatar} />

          <View style={styles.info}>
            <Title style={styles.title}>{nome}</Title>
            <Paragraph style={styles.textSecondary}>{cargo}</Paragraph>
          </View>
        </Card.Content>

        <Card.Content style={{ marginTop: 12 }}>
          <Paragraph style={styles.sectionTitle}>Resumo</Paragraph>
          <Paragraph style={styles.text}>{resumo}</Paragraph>

          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>
            Experiência
          </Paragraph>

          {experiencias.map((exp) => (
            <View key={exp.id} style={styles.expItem}>
              <Title style={styles.expEmpresa}>
                {exp.empresa}{" "}
                <Paragraph style={styles.expPeriodo}>({exp.periodo})</Paragraph>
              </Title>
              <Paragraph style={styles.text}>{exp.descricao}</Paragraph>
            </View>
          ))}

          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>
            Habilidades
          </Paragraph>

          {habilidades.map((h, i) => (
            <Paragraph key={i} style={styles.text}>
              • {h}
            </Paragraph>
          ))}
        </Card.Content>

        <Card.Actions style={{ justifyContent: "flex-end" }}>
          <Button
            mode="contained"
            textColor="#000"
            buttonColor="#bb86fc"
            onPress={() => alert("Tela de edição ainda não implementada.")}
          >
            Editar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  card: {
    backgroundColor: "#1e1e1e",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#333",
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    color: "#d4d4d4",
  },
  textSecondary: {
    color: "#b0b0b0",
  },
  sectionTitle: {
    marginBottom: 6,
    marginTop: 8,
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
  expItem: {
    marginBottom: 12,
  },
  expEmpresa: {
    fontSize: 14,
    color: "#ffffff",
  },
  expPeriodo: {
    fontSize: 12,
    color: "#999",
  },
});
