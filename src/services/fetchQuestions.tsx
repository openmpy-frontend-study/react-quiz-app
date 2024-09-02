import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";

export const getQuestionList = async (
  amount: number,
  dificulty: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseURL}${amount}&dificulty=${dificulty}&type=boolean`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(`Error fetching questions.${error}`);
  }
};
