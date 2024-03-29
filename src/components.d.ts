/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface AppHeader {}
  interface AppPosts {}
  interface AppRoot {
    'test': string;
  }
  interface AppTodos {
    'match': MatchResults;
  }
  interface AppUser {
    'match': MatchResults;
  }
  interface AppUsers {
    'history': RouterHistory;
  }
  interface NavBar {}
  interface PageNotFound {}
}

declare global {


  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppPostsElement extends Components.AppPosts, HTMLStencilElement {}
  var HTMLAppPostsElement: {
    prototype: HTMLAppPostsElement;
    new (): HTMLAppPostsElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppTodosElement extends Components.AppTodos, HTMLStencilElement {}
  var HTMLAppTodosElement: {
    prototype: HTMLAppTodosElement;
    new (): HTMLAppTodosElement;
  };

  interface HTMLAppUserElement extends Components.AppUser, HTMLStencilElement {}
  var HTMLAppUserElement: {
    prototype: HTMLAppUserElement;
    new (): HTMLAppUserElement;
  };

  interface HTMLAppUsersElement extends Components.AppUsers, HTMLStencilElement {}
  var HTMLAppUsersElement: {
    prototype: HTMLAppUsersElement;
    new (): HTMLAppUsersElement;
  };

  interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {}
  var HTMLNavBarElement: {
    prototype: HTMLNavBarElement;
    new (): HTMLNavBarElement;
  };

  interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {}
  var HTMLPageNotFoundElement: {
    prototype: HTMLPageNotFoundElement;
    new (): HTMLPageNotFoundElement;
  };
  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
    'app-posts': HTMLAppPostsElement;
    'app-root': HTMLAppRootElement;
    'app-todos': HTMLAppTodosElement;
    'app-user': HTMLAppUserElement;
    'app-users': HTMLAppUsersElement;
    'nav-bar': HTMLNavBarElement;
    'page-not-found': HTMLPageNotFoundElement;
  }
}

declare namespace LocalJSX {
  interface AppHeader {}
  interface AppPosts {}
  interface AppRoot {
    'test'?: string;
  }
  interface AppTodos {
    'match'?: MatchResults;
  }
  interface AppUser {
    'match'?: MatchResults;
  }
  interface AppUsers {
    'history'?: RouterHistory;
  }
  interface NavBar {}
  interface PageNotFound {}

  interface IntrinsicElements {
    'app-header': AppHeader;
    'app-posts': AppPosts;
    'app-root': AppRoot;
    'app-todos': AppTodos;
    'app-user': AppUser;
    'app-users': AppUsers;
    'nav-bar': NavBar;
    'page-not-found': PageNotFound;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-header': LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
      'app-posts': LocalJSX.AppPosts & JSXBase.HTMLAttributes<HTMLAppPostsElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-todos': LocalJSX.AppTodos & JSXBase.HTMLAttributes<HTMLAppTodosElement>;
      'app-user': LocalJSX.AppUser & JSXBase.HTMLAttributes<HTMLAppUserElement>;
      'app-users': LocalJSX.AppUsers & JSXBase.HTMLAttributes<HTMLAppUsersElement>;
      'nav-bar': LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
      'page-not-found': LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
    }
  }
}


