import styled from "styled-components";
import Head from "next/head";
import { useRouter } from 'next/router';

import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setname] = React.useState('');
  console.log('retorno do useState', name, setname);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <meta
            name="title"
            property="og:title"
            content="ímersão Alura Quiz - Jhonatan Nobre"
          />
          <meta
            name="image"
            property="og:image"
            content="https://github.com/JhonatanNobreBarboza/alura-quiz-jhonatan-base/blob/master/fundoImersao.PNG?raw=true"
          />
          <meta
            name="description"
            property="og:description"
            content="Projeto a partir da semana de Imersão React Next.JS - Alura"
          />
          <meta name="author" content="Jhonatan Nobre" />
          <title>AluraQuiz - Jhonatan Nobre</title>
        </Head>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`)
              console.log('Fazendo uma submissão por meio do react');
            }}>
              <Input 
              name="nomeDoUsuário"
              onChange={(infosDoEvento) => setname(infosDoEvento.target.value)}
              placeholder="Diz ai seu nome" 
              value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar como ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/JhonatanNobreBarboza" />
    </QuizBackground>
  );
}
