import React from 'react';
import { ButtonStyleCore } from '.';
import { Ione } from '../../icons/Ione';
import { IButtonStyleCore } from '../../types/__internal__';

//Se agregan las props que hacen falta (icon left y right, son elementos de tipo React (nodos))
interface IButton extends IButtonStyleCore {
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
};

export const Button:React.FC<IButton> = (props) => {
    const {color, size, variant, iconLeft} = props;
  return (
    <ButtonStyleCore>hOLA (:</ButtonStyleCore>
  );
};

const IconAccept=()=>{
  // <Ione />
};

export const TestRender: React.FC=()=>{
    return (
        // <Button iconLeft={<Ione />}>
        //   Hola
        // </Button>
        <Button iconLeft={<Ione />} />
    )
}
