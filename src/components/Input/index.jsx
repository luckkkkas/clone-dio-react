import {InputContainer, InputText, IconContainer} from "./style";
import { useForm, Controller } from "react-hook-form"

const Input = ({leftIcon, name, control, rest}) => {
      
    return (
        <InputContainer>
          <IconContainer>{leftIcon}</IconContainer>
          <Controller 
          name={name} 
          control={control}
          rules={{required: true}}
          render={({field}) => <InputText {...field} {...rest}/>}
          />
        </InputContainer>
    );
};

export default Input;
