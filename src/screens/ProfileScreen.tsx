import React from "react";
import { ScrollView, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Avatar, Chip } from "react-native-paper";

const imageSource = require("../assets/foto.jpeg");

export default function ProfileScreen() {
  const nome = "Ezequiel Borges";
  const cargo = "Estudante de Análise e Desenvolvimento de Sistemas";

  const resumo =
    "Estudante de ADS no 4º período, em busca do primeiro estágio ou oportunidade como desenvolvedor. Experiência em projetos acadêmicos, com proficiência em JavaScript, TypeScript, React, Node e MongoDB. Bom trabalho em equipe e motivação para aprender e contribuir no mercado de tecnologia.";

  const experiencias = [
    {
      id: "1",
      empresa: "Faculdade Senac Pernambuco — Designer de Interface",
      periodo: "Out/2025 - Dez/2025",
      descricao:
        "Criação da interface das telas mobile do Projeto SIOB (Projeto Integrador do 3º período), focando usabilidade e experiência do usuário.",
    },
    {
      id: "2",
      empresa: "Faculdade Senac Pernambuco & Accenture Brasil — Desenvolvedor",
      periodo: "Fev/2025 - Jun/2025",
      descricao:
        "Residência acadêmica: Desenvolvimento de plataforma web para auxiliar agricultores no planejamento de rotação de culturas usando computação quântica (Quantum Annealing). Desenvolvi telas em HTML, CSS e JS, promovendo produtividade e sustentabilidade.",
    },
    {
      id: "3",
      empresa: "Projeto SIOB — Sistema Bombeiros",
      periodo: "2025.2",
      descricao:
        "Desenvolvimento de sistema para modernizar e otimizar o registro de ocorrências do corpo de bombeiros.",
    },
  ];

  const formacao = [
    {
      id: "1",
      instituicao: "Faculdade Senac Pernambuco",
      curso: "Bacharelado em Análise e Desenvolvimento de Sistemas",
      periodo: "Ago/2024 - Dez/2026",
    },
  ];

  const certificacoes = [
    "Hooks e Fundamentos do React | SENAC GrowUp 2025.2",
    "HTTP e Performance | SENAC GrowUp 2025.2",
  ];

  const habilidades = [
    "JavaScript",
    "TypeScript",
    "React / React Native",
    "Node.js / MongoDB",
    "Git / GitHub",
    "Figma",
    "Inglês avançado",
  ];

  const contatos = [
    { label: "📧 e-mail", url: "mailto:ezequielborgesdev@gmail.com" },
    { label: "🔗 LinkedIn", url: "https://linkedin.com/in/ezequielborgesdev" },
    { label: "💻 GitHub", url: "https://github.com/kiellzz" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <Card style={styles.card}>
        {/* Header */}
        <Card.Content style={styles.header}>
          <Avatar.Image size={110} source={imageSource} style={styles.avatar} />
          <View style={styles.info}>
            <Title style={styles.title}>{nome}</Title>
            <Paragraph style={styles.cargo}>{cargo}</Paragraph>
          </View>
        </Card.Content>

        {/* Resumo */}
        <Card.Content style={{ marginTop: 16 }}>
          <Paragraph style={styles.sectionTitle}>Resumo</Paragraph>
          <Paragraph style={styles.text}>{resumo}</Paragraph>

          {/* Experiência */}
          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>Experiência</Paragraph>
          {experiencias.map((exp) => (
            <View key={exp.id} style={styles.expItem}>
              <Title style={styles.expEmpresa}>
                {exp.empresa} <Paragraph style={styles.expPeriodo}>({exp.periodo})</Paragraph>
              </Title>
              <Paragraph style={styles.text}>{exp.descricao}</Paragraph>
            </View>
          ))}

          {/* Formação Acadêmica */}
          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>Formação Acadêmica</Paragraph>
          {formacao.map((f) => (
            <View key={f.id} style={styles.expItem}>
              <Title style={styles.expEmpresa}>{f.instituicao}</Title>
              <Paragraph style={styles.text}>
                {f.curso} ({f.periodo})
              </Paragraph>
            </View>
          ))}

          {/* Certificações */}
          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>Certificações</Paragraph>
          {certificacoes.map((c, i) => (
            <Paragraph key={i} style={styles.text}>• {c}</Paragraph>
          ))}

          {/* Habilidades */}
          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>Habilidades</Paragraph>
          <View style={styles.chipContainer}>
            {habilidades.map((h, i) => (
              <Chip key={i} style={styles.chip} textStyle={{ color: "#fff" }}>
                {h}
              </Chip>
            ))}
          </View>

          {/* Contato */}
          <Paragraph style={[styles.sectionTitle, { marginTop: 16 }]}>Contato</Paragraph>
          {contatos.map((c, i) => (
            <TouchableOpacity key={i} onPress={() => Linking.openURL(c.url)}>
              <Paragraph style={[styles.text, styles.link]}>{c.label}</Paragraph>
            </TouchableOpacity>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
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
    paddingVertical: 12,
  },
  avatar: {
    backgroundColor: "#333",
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  cargo: {
    color: "#b0b0b0",
    fontSize: 14,
    marginTop: 4,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  text: {
    color: "#d4d4d4",
    fontSize: 14,
    lineHeight: 20,
  },
  expItem: {
    marginBottom: 12,
  },
  expEmpresa: {
    fontSize: 14,
    color: "#fff",
  },
  expPeriodo: {
    fontSize: 12,
    color: "#999",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  chip: {
    backgroundColor: "#333",
    marginRight: 6,
    marginBottom: 6,
  },
  link: {
    textDecorationLine: "underline",
    marginTop: 4,
  },
});