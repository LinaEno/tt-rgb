// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import sendFormData from "../../utils/sendFunction";

// const EMAIL = "lbenotik@gmail.com";

const Form = () => {
  const [number, setNumber] = useState("");

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Введите имя и фамилию")
      .matches(/^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$/, "Введите имя и фамилию"),
    // phone: yup.string().required("Введите номер телефона"),
    email: yup.string().email().required("Некорректный email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ username, email }) => {
    const data = {
      username,
      phone: number,
      email,
    };
    sendFormData("lbenotik@gmail.com", "Новое письмо", JSON.stringify(data));
    reset();
  };

  return (
    <div className="form">
      <h2 className="form__title">
        Запишитесь <span>бесплатно</span> <br /> и получите подарок
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <input
            className="form__input"
            type="text"
            id="username"
            {...register("username")}
            placeholder="Ваше имя и фамилия"
          />
        </label>
        {errors.username && <div>{errors.username.message}</div>}
        <PhoneInput
          className="form__input"
          defaultCountry="UA"
          international
          value={number}
          onChange={setNumber}
          placeholder="Ваш номер телефона"
          // {...register("phone")}
        />
        {errors.phone && <div>{errors.phone.message}</div>}
        <label htmlFor="email">
          <input
            className="form__input"
            type="email"
            id="email"
            {...register("email")}
            placeholder="Ваш email"
          />
        </label>
        {errors.email && <div>{errors.email.message}</div>}
        <button className="form__btn" type="submit">
          Записаться бесплатно
        </button>
        <p className="form__link">
          Нажимая на кнопку я соглашаюсь
          <a href="/">с политикой конфиденциальности</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
