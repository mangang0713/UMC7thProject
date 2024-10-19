import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("유효하지 않은 이메일입니다.")
      .required("이메일을 반드시 입력해주세요"),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 최대 16자 이하여야 합니다.")
      .required("비밀번호를 반드시 입력해주세요."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type={`email`} {...register("email")} />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <input type={`password`} {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type={`submit`} />
    </form>
  );
};

export default SignUp;
