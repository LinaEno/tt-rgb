// eslint-disable-next-line no-unused-vars
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "emailjs-com";

const Form = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Введите имя и фамилию")
      .matches(/^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$/, "Введите имя и фамилию"),
    email: yup.string().email().required("Некорректный email"),
    phone: yup.string().required("Введите телефон"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ username, email, phone }) => {
    const data = {
      username,
      phone,
      email,
    };

    emailjs
      .send("service_x8k6s4x", "template_ifm0rif", data, "5vKKz0cfzDQQ1vVU3")
      .then((response) => {
        console.log("Success!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

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
        {errors.username && (
          <div className="form__error">{errors.username.message}</div>
        )}
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              className="form__input"
              defaultCountry="UA"
              international
              value={value}
              onChange={onChange}
              placeholder="Ваш номер телефона"
            />
          )}
        />
        {errors.phone && (
          <div className="form__error">{errors.phone.message}</div>
        )}
        <label htmlFor="email">
          <input
            className="form__input"
            type="email"
            id="email"
            {...register("email")}
            placeholder="Ваш email"
          />
        </label>
        {errors.email && (
          <div className="form__error">{errors.email.message}</div>
        )}
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
