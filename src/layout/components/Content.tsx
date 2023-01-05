import { Container, Toolbar } from '@mui/material';
interface Props {
    children?: JSX.Element;
};

export const Content = ({ children }: Props) => {
  return (
        <Container maxWidth={false}>
            <Toolbar />
            {children}
        </Container>
  );
};
