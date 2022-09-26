import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Content {
  type: "paragraph" | "link";
  content: string;
}
[];

export interface PostsProps {
  author: {
    name: string;
    role: string;
    avatarURL: string;
  };
  publishedAt: Date;
  content: Content[];
  linkedinURL: string;
  githubURL: string;
}

export function Post({
  author,
  githubURL,
  linkedinURL,
  publishedAt,
  content,
}: PostsProps) {
  const [comments, setComments] = useState(["um comentário aqui"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormatted = format(publishedAt, "dd/MM/yyyy 'às' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const invalidWhenIsEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
            <a href={githubURL}>
              <GithubLogo className={styles.logo} size={20} />
            </a>
            <a href={linkedinURL}>
              <LinkedinLogo className={styles.logo} size={20} />
            </a>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleInvalidNewComment}
          required
        />

        <footer>
          <button type="submit" disabled={invalidWhenIsEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={() => deleteComment(comment)}
            />
          );
        })}
      </div>
    </article>
  );
}
