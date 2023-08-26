export type FilterOptionsType = {
  title: string;
  paramValue: string;
}[];

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};

export interface TitleType {
  _id: string;
  id: string;
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
  primaryImage: {
    url: string;
  };
  titleType: {
    isSeries: boolean;
  };
  genres: {
    genres: { text: string }[];
  };
  titleText: {
    text: string;
  };
  releaseYear: {
    year: number;
  };
  runtime: {
    seconds: number;
  };
}
