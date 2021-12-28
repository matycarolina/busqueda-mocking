import React from "react";
import { Search } from "./components/Search";
import { EmojiGrid } from "./components/EmojiGrid";
import { useFetchEmojis } from "./hooks/useFetchEmojis";

const EmojiApp = () => {
  const { data, loading, setState } = useFetchEmojis();

  const handleSearch = (input) => {
    const results = data?.filter((emoji) =>
      emoji.title.toLowerCase().includes(input.toLowerCase())
    );
    setState((prevState) => ({ ...prevState, data: results }));
    console.log(results);
  };
  return (
    <div>
      <h2>Emoji Search</h2>
      <Search onSearch={handleSearch} />
      <hr />
      <ol>
        <EmojiGrid emojies={data} loading={loading} />
      </ol>
    </div>
  );
};

export default EmojiApp;
