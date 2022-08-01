import { StyledLink } from './AppBar.styled';

export function AuthNav() {
  return (
    <div>
      <StyledLink to="/login" data-testid="login-link">
        Login
      </StyledLink>
      <StyledLink to="/register" data-testid="register-link">
        Register
      </StyledLink>
    </div>
  );
}
