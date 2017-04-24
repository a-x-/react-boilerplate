import { Route as RawRoute, NavLink as RawNavLink } from 'react-router-dom';

export const NavLink = props => <RawNavLink activeClassName="_current" {...props}/>;

export const Route = ({ component: Component, hook, ...rest }) => {
  const onRouteRender = props => {
    if (props.location.action !== "POP") window.scrollTo(0, 0);
    hook && hook(props);
    return <Component {...props}/>;
  };

  return <RawRoute {...rest} render={onRouteRender}/>
};
