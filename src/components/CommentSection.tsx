import React, { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 gap-y-6 gap-x-8 pt-8">
        <div className="max-w-[1000px] mx-auto">
          <hr />
          <div className="mt-6 text-xl font-semibold">Comments:</div>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full p-3 border rounded-md outline-none resize-none focus:border-blue-500"
              rows={4}
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className={`mt-3 px-6 py-2 rounded-md transition ${
                comment.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Publish
            </button>
          </form>
          <div className="mt-6 text-left">
            {comments.length > 0 && (
              <div className="border-t-2">
                {comments.map((comment, index) => (
                  <p key={index} className="mt-2 p-3">
                    {comment}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
