import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #313131;
`;

export const Visual = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  background: #ffffff;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
    color: rgb(95, 88, 89);
  }

  p + p {
    margin-top: 8px;
  }

  img {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;

  video {
    width: 100%;
  }
`;

export const Letter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  padding: 25px;

  background: #ffffff;

  h2 {
    font-size: 20px;
    color: rgb(95, 88, 89);
  }

  h3 {
    font-size: 14px;
  }

  p {
    margin-top: 10px;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    color: rgb(95, 88, 89);
  }

  img {
    width: 100%;
  }

  .image {
    margin: 50px 0;
  }

  > div {
    width: 100%;
    p {
      text-align: start;
      line-height: 20px;
    }
  }

  div + div {
    margin-top: 15px;
  }
`;

export const Call = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  padding: 30px 24px;
  background: #fffbef;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  padding: 25px;

  background: #ffffff;

  div {
    width: 100%;
    height: 370px;
  }
`;
