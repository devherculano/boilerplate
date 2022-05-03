import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>TypeScript, NextJS e Styled Components</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
      />
    </S.Wrapper>
  );
}
