import axios from "axios";
import React, { useEffect, useState } from "react";
import CardGrid from "../CardsGrid";

export interface bookInfo {
  id: number;
  imgsrc: string;
  bookName: string;
  authorName: string;
  time: string;
  nReads: string;
  icon1: string;
  icon2: string;
  finished: boolean;
}

interface FunctionalGridProps {
  name: "finished" | "currentlyReading";
  books: bookInfo[];
  fetchRecords: () => void;
}

const Index = ({ name, books, fetchRecords }: FunctionalGridProps) => {
  const handleClick = async (id: number, finish: boolean) => {
    const response1 = await axios.patch(
      `http://localhost:3001/booklist/${id}`,
      {
        finished: !finish,
      }
    );
    console.log(response1.data);
    if (response1.data) {
      fetchRecords();
    }

    const response2 = await axios.get("http://localhost:3001/booklist");
    console.log(response2.data);

    console.log("handleclick");
    console.log(books);
  };

  return (
    <>
      <CardGrid details={books} handleClick={handleClick} />
    </>
  );
};

export default Index;
