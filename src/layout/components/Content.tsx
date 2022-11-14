import { Container, Toolbar } from '@mui/material';
interface Props {
    children?: JSX.Element;
};

export const Content = ({ children }: Props) => {
  return (
        <Container>
            <Toolbar />
            {children}
        </Container>
  );
};
