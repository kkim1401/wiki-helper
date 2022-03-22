import styled from 'styled-components';

export const Root = styled.div(() => ({
  margin: 'auto',
  padding: '1em',
  maxWidth: '720px',
  width: '100%',
}));

export const Header = styled.h1(() => ({
  borderBottom: '1px solid #a2a9b1',
  fontSize: '1.8em',
  fontFamily: `'Georgia','Times',serif`,
  fontWeight: '400',
  lineHeight: '1.3',
}));

export const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
}));

export const FormField = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const FormFieldLabel = styled.label(() => ({
  marginBottom: '0.5rem',
}));

export const FormFieldInput = styled.div(() => ({
  border: '1px solid #a2a9b1',
  borderRadius: '2px',
  boxShadow: 'inset 0 0 0 1px transparent',
  height: '2rem',
  width: '5rem',
}));

export const CountsField = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const List = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1rem',
}));

export const ListSpinner = styled.div(() => ({
  width: '100%',
}));

export const Card = styled.div(() => ({
  border: '1px solid #a2a9b1',
  background: '#FFF',
  boxShadow: '0 2px 4px 0 rbga(0,0,0,0.2)',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '2em 1em',
  margin: '0.5rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  width: '100%',
  overflow: 'hidden',
}));

export const CardTitle = styled.h2(() => ({
  fontSize: '1.5em',
  width: '70%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

export const CardInfo = styled.div(() => ({
  fontSize: '1em',
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignContent: 'space-between',
  textAlign: 'right',
}));

export const CardRank = styled.div(() => ({
  marginBottom: '1em',
}));

export const CardViews = styled.div(() => ({}));

export const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
    height: '40%',
    width: '90%',
    maxWidth: '720px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export const ModalTitle = styled.h3(() => ({
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginBottom: '1rem',
}));

export const ModalContent = styled.p(() => ({
  height: '100%',
  minHeight: '1.5em',
  overflow: 'auto',
}));

export const ModalSpinner = styled.div(() => ({
  margin: 'auto',
}));
