"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Esquema de validación de datos
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col items-center">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        <p>{errors.name?.message}</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <p>{errors.email?.message}</p>

        <label>Subject</label>
        <input
          type="text"
          placeholder="Why you want to contact"
          {...register("subject", { required: true })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        <p>{errors.subject?.message}</p>

        <label>Message</label>
        <textarea
          placeholder="Your message"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        <p>{errors.message?.message}</p>

        <input type="submit" />
      </form>
    </section>
  );
}
