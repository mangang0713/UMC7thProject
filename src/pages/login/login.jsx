import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("유효하지 않은 이메일입니다.")
      .required("이메일을 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 최대 16자 이하여야 합니다.")
      .required("비밀번호를 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  const isFormValid = () => {
    return !(
      !watch("email") ||
      !watch("password") ||
      errors.email ||
      errors.password
    );
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <LoginInput
          placeholder="이메일을 입력해주세요!"
          type={`email`}
          {...register("email", {
            onChange: () => {
              trigger("email");
            },
          })}
        />
        <LoginErrorMessage hasError={!!errors.email}>
          {errors.email?.message}
        </LoginErrorMessage>
      </InputDiv>
      <InputDiv>
        <LoginInput
          placeholder="비밀번호를 입력해주세요!"
          type={`password`}
          {...register("password", {
            onChange: () => {
              trigger("password");
            },
          })}
        />
        <LoginErrorMessage hasError={!!errors.password}>
          {errors.password?.message}
        </LoginErrorMessage>
      </InputDiv>

      <LoginSubmit type="submit" disabled={!isFormValid()}>
        제출
      </LoginSubmit>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  padding-left: 30px;
  color: black;
`;

const LoginErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  height: 12px;
  margin-top: 5px;
  visibility: ${({ hasError }) => (hasError ? "visible" : "hidden")};
`;

const LoginSubmit = styled.button`
  width: 530px;
  height: 50px;
  border-radius: 20px;
  padding-left: 30px;
  border-color: ${({ disabled }) => (disabled ? "gray" : "pink")};
  background-color: ${({ disabled }) => (disabled ? "gray" : "pink")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
