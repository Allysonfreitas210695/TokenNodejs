import * as S from './styled';

type BUTTON = 'button' | 'submit' | 'reset' ;

interface IBUtton {
  text: string;
  type?: BUTTON;
  onClick?: () => void | undefined;
}

export const Button = ({text, type='button', onClick}: IBUtton) => {
  return (
      <>
        { onClick ? (
          <S.Button type={type} onClick={onClick}>
            {text}
          </S.Button>
        ) : (
        <>
          <S.Button type={type} >
            {text}
          </S.Button>
        </>
        )
        }
        
      </>
  )
}
