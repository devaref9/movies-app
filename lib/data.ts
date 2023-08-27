type Title = {
  id: string;
  comments?: { id: string; text: string; createdAt?: Date }[];
};

let titles: Title[] = [];
console.log("titles", titles);

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
