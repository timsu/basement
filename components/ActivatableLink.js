const ActivatableLink = ({ children, to, activeOnlyWhenExact }) => {

  const ActivatedLink = (
    <ActiveLink>
      <Link to={to}>{children}</Link>
    </ActiveLink>
  )

  const InactiveLink = (
    <Link to={to}>{children}</Link>
  )

  return <Route path={to} exact={true} children={({ match }) => match ? ActivatedLink : InactiveLink} />
}
