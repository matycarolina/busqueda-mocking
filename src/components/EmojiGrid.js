import React from "react";
import { EmojiGridItem } from "./EmojiGridItem";

export const EmojiGrid = ({ emojies, loading }) => {

  return (
    <>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {emojies?.map((emoji) => (
          <EmojiGridItem key={emoji.id} {...emoji} />
        ))}
      </div>
    </>
  );
};
