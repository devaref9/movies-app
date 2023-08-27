type Title = {
  id: string;
  comments?: { id: string; text: string; createdAt?: Date }[];
};

let titles: Title[] = [
  {
    id: "tt16993822",
    comments: [
      {
        text: "wow",
        id: "c7a1e1a1-5be0-40f6-9e62-18e76545c063",
        createdAt: new Date("2023-08-27T09:32:09.435Z"),
      },
    ],
  },
];

// handlers
export const getTitles = () => titles;

export const getTitleById = (titleId: string) => {
  const title = titles.find((item) => item.id === titleId);
  if (title) {
    return title;
  } else {
    addTitle({ id: titleId, comments: [] });
    const title = titles.find((item) => item.id === titleId);
    return title;
  }
};

export const addTitle = (title: Title) => {
  titles.push(title);
};

export const addComment = (
  comment: { id: string; text: string },
  titleId: string
) => {
  const title = titles.find((title) => title.id === titleId);
  if (title?.comments) {
    title.comments.push({ ...comment, createdAt: new Date() });
  } else if (title) {
    title.comments = [];
    title.comments.push({ ...comment, createdAt: new Date() });
  }
};
