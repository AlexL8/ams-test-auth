import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { PAGE_PATH, Pages } from "./interfaces";


export const ROUTES: Pages = [
	{
	  path: PAGE_PATH.LOGIN,
	  component: <AuthPage/>,
	  isPrivate: false
	},
	{
	  path: PAGE_PATH.PROFILE,
	  component: <ProfilePage/>,
	  isPrivate: true
	},
  ];
  
  export const PUBLIC_PAGES = ROUTES.filter(
	  (page) => !page.isPrivate
  );
  
  export const PRIVATE_PAGES = ROUTES.filter(
	  (page) => page.isPrivate
  );