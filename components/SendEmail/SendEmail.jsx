import classNames from "classnames";
import { useState } from "react";
import api from "../../services/api";
import styles from "../../styles/SendEmail.module.css";
import ToastError from "../../helpers/ToastError.js";
import ToastSuccess from "../../helpers/ToastSuccess.js";
import { Puff } from "react-loader-spinner";
export default function SendEmail() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.sobrenome || !form.email || !form.mensagem) {
      return ToastError("Preencha todos os campos do formulário");
    }
    try {
      setLoading(true);
      await api.post(`/sendMail`, {
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        mensagem: form.mensagem,
      });
      setLoading(false);
      setForm({ nome: "", sobrenome: "", email: "", mensagem: "" });
      return ToastSuccess("E-mail enviado!");
    } catch (error) {
      return ToastError("Não foi possível enviar o e-mail");
    }
  };
  const handleChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 431,
            height: 431,
          }}
        >
          <Puff
            height="80"
            width="80"
            radisu={1}
            color="#FC4A1A"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
          />
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.space_between}>
            <input
              type="text"
              placeholder="Nome"
              className={styles.input}
              name="nome"
              value={form.nome}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className={styles.input}
              name="sobrenome"
              value={form.sobrenome}
              onChange={handleChangeInput}
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className={classNames(styles.input, styles.input_email)}
            name="email"
            value={form.email}
            onChange={handleChangeInput}
          />
          <textarea
            cols="10"
            rows="10"
            placeholder="Mensagem"
            className={classNames(styles.input, styles.textarea)}
            name="mensagem"
            value={form.mensagem}
            onChange={handleChangeInput}
          />
          <button className={styles.btn_enviar}>Enviar</button>
        </form>
      )}
    </>
  );
}
