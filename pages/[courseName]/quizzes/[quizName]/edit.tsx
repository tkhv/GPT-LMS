"use client";

import { useState } from "react";
import { Quiz, QuizQuestion } from "@/lib/types";
import QuizEditor from "@/components/QuizEditor";
import { useRouter } from "next/router";

export default function QuizEdit() {
  const router = useRouter();
  const { courseName, quizName } = router.query;
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      questionNum: 1,
      questionType: "MCQ",
      question: "which one is the best cloud service provider",
      options: ["AWS", "Azure", "GCP", "Oracle Cloud"],
      answer: 2,
      points: 10,
    },
    {
      questionNum: 2,
      questionType: "MCQ",
      question: "string",
      options: ["string1", "string2", "string3", "string4"],
      answer: 3,
      points: 10,
    },
    {
      questionNum: 3,
      questionType: "MCQ",
      question: "string",
      options: ["string1", "string2", "string3", "string4"],
      answer: 1,
      points: 10,
    },
    {
      questionNum: 4,
      questionType: "FRQ",
      question: "string",
      options: [],
      answer: "this is the answer!",
      points: 80,
    },
    {
      questionNum: 5,
      questionType: "FRQ",
      question: "string",
      options: [],
      answer: "answer!",
      points: 80,
    },
  ]);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {courseName} {quizName}
          </h2>
        </div>
      </div>
      {/*need to be able to edit Instuction here */}
      <QuizEditor questions={questions} setQuestions={setQuestions} />
    </div>
  );
}
