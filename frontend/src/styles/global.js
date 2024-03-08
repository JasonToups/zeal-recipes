import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
  }
  body {
    font-family: Arial, sans-serif;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.67em;
  }
  p {
    font-size: 1em;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  input {
    font-size: 1em;
  }
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
  }
  th {
    text-align: left;
  }
  td {
    padding: 10px;
  }
  img {
    max-width: 100%;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .left {
    text-align: left;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration: underline;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
`
