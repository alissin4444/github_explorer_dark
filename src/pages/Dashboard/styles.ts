import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f0;
  font-weight: bold;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;

    height: 70px;
    padding: 0 24px;
    border: 2px solid #464646;
    background: #464646;
    border-radius: 5px 0 0 5px;
    color: #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${lighten(0.2, '#c53030')};
        border-right: 0;
      `}

    &::placeholder {
      color: #e7e7e7;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background: #48dbfb;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#48dbfb')};
    }
  }
`;

export const Error = styled.span`
  display: block;

  color: ${lighten(0.2, '#c53030')};

  margin-top: 12px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #686868;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(-10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #cbcbd6;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
