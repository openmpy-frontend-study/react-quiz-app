import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import AppButton from "../AppButton";

interface QuestionCardProps {
  questions: string;
  category: string;
  totalQuestions?: number;
  questionNumber?: number;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questions,
  checkAnswer,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progresss: {questionNumber} / {totalQuestions}
        </Box>

        <Box fontSize="sm" mb={1}>
          {category}
        </Box>

        <Heading as="h1" size="lg">
          <p dangerouslySetInnerHTML={{ __html: questions }}></p>
        </Heading>

        <Flex direction="column">
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={checkAnswer}
              value="True"
              width="full"
            />
          </Box>
          <Spacer />
          <Box>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={checkAnswer}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default QuestionCard;
