export enum PAGE_PATH {
	LOGIN = '/login',
	PROFILE = '/profile',
  }
  
  interface Page {
	path: PAGE_PATH;
	component: React.ReactNode;
	isPrivate: boolean;
  }
  
export type Pages = Page[];