import { Post, PostsProps } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

interface Posts extends PostsProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/6764501?v=4",
      name: "Gabriel Nogueira",
      role: "Dev Front-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Por que Deus nos abandonou?",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-21 10:00:00"),
    githubURL: "https://github.com/gabrielnmotta",
    linkedinURL: "https://www.linkedin.com/in/gabrielnogueirams/",
  },
  {
    id: 2,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/104404496?v=4",
      name: "Murylo Andrade",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Frase motivacional: 'O êxito é ir de frustração a frustração sem perder a animação'",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-22 10:00:00"),
    githubURL: "https://github.com/muryloandrade",
    linkedinURL: "https://www.linkedin.com/in/muryloandrade/",
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                githubURL={post.githubURL}
                linkedinURL={post.linkedinURL}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
