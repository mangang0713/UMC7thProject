import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { useState } from "react";

const SignUp = () => {
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

  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  const handlePasswordConfirmChange = () => {
    const password = watch("password");
    const passwordConfirm = watch("passwordConfirm");

    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordConfirmError("");
    }
  };

  const isFormValid = () => {
    return !(
      !watch("email") ||
      !watch("password") ||
      !watch("passwordConfirm") ||
      errors.email ||
      errors.password ||
      passwordConfirmError
    );
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <SignUpInput
          placeholder="이메일을 입력해주세요!"
          type={`email`}
          {...register("email", {
            onChange: () => {
              trigger("email");
            },
          })}
        />
        <SignUpErrorMessage hasError={!!errors.email}>
          {errors.email?.message}
        </SignUpErrorMessage>
      </InputDiv>
      <InputDiv>
        <SignUpInput
          placeholder="비밀번호를 입력해주세요!"
          type={`password`}
          {...register("password", {
            onChange: () => {
              trigger("password");
            },
          })}
        />
        <SignUpErrorMessage hasError={!!errors.password}>
          {errors.password?.message}
        </SignUpErrorMessage>
      </InputDiv>
      <InputDiv>
        <SignUpInput
          placeholder="비밀번호를 다시 입력해주세요!"
          type={`password`}
          {...register("passwordConfirm", {
            onChange: handlePasswordConfirmChange,
          })}
        />
        <SignUpErrorMessage hasError={!!passwordConfirmError}>
          {passwordConfirmError}
        </SignUpErrorMessage>
      </InputDiv>

      <SignUpSubmit type="submit" disabled={!isFormValid()}>
        회원가입하기
      </SignUpSubmit>
    </SignUpForm>
  );
};

export default SignUp;

const SignUpForm = styled.form`
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
const SignUpInput = styled.input`
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

const SignUpErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  height: ${({ hasError }) => (hasError ? "auto" : "12px")};
  margin-top: 5px;
  visibility: ${({ hasError }) => (hasError ? "visible" : "hidden")};
`;

const SignUpSubmit = styled.button`
  width: 530px;
  height: 50px;
  border-radius: 20px;
  padding-left: 30px;
  border-color: ${({ disabled }) => (disabled ? "gray" : "pink")};
  background-color: ${({ disabled }) => (disabled ? "gray" : "pink")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
