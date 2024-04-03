import fetch from "node-fetch";

export const getQuestion = async () => {
  const response = await fetch("https://random-word-api.herokuapp.com/word");
  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`);
  }

  return response.json();
};
