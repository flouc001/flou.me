export type RouteConfig = {
  label: string;
};

export const routes: { [routeName: string]: RouteConfig } = {
  home: {
    label: 'home',
  },
  blog: {
    label: 'blog',
  },
};
