import type { FunctionalComponent } from "preact";
import type { Comment } from "../models/Item";
import { useState } from "preact/hooks";

const CommentToggle: FunctionalComponent<{
  comment: Comment;
}> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <span
      onClick={() => {
        const text = document.getElementById(`${comment.id}-text`);
        const children = document.getElementById(`${comment.id}-children`);
        const triangle = document.getElementById(`${comment.id}-triangle`);
        if (isOpen) {
          text.classList.add("hidden");
          children.classList.add("hidden");
          triangle.classList.add("opacity-0");
          setIsOpen(false);
        } else {
          text.classList.remove("hidden");
          children.classList.remove("hidden");
          triangle.classList.remove("opacity-0");
          setIsOpen(true);
        }
      }}
      class="cursor-pointer select-none"
    >
      [{isOpen ? "-" : "+"}]
    </span>
  );
};

export default CommentToggle;
